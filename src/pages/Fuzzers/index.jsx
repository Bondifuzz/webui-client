import { Drawer, message, Skeleton, Tabs } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Redirect,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { drawerBasicConfig } from "../../config/constants";
import { CreateFuzzerWithVersion } from "../../containers/Form";
import Navbar from "../../containers/Navbar";
import NoFuzzers from "../../containers/NoFuzzers";
import Sidebar from "../../containers/Sidebar";
import {
  fetchFuzzers,
  useAuthDispatch,
  useAuthState,
  useFuzzers,
} from "../../context";
import {
  fetchFuzzersPage,
  getProject,
  setFconfs,
  switchCurrentProject,
} from "../../context/actions";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import newURL from "../../utilities/newURL";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
import Fuzzer from "./Fuzzer";
import styles from "./Fuzzers.module.css";
const { TabPane } = Tabs;
const initialStateVersions = {
  versions: [],
  isFetching: false,
  hasError: false,
};

const Fuzzers = () => {
  let { url } = useRouteMatch();
  let { projectId } = useParams();
  const userDetails = useAuthState();
  const userDispatch = useAuthDispatch();
  const errorHandlerConfig = useErrorMessageConfig();
  const { fuzzersFetched, dispatch } = useFuzzers();
  const { fuzzers, isFetching, currentFuzzerID, fconfs } = fuzzersFetched;
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isFetchingCurrent, setIsFetchingCurrent] = useState();
  const [drawerType, setDrawerType] = useState();
  const history = useHistory();
  const [currentProject, setCurrentProject] = useState({});
  const { t } = useTranslation();

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  const showDrawer = (type) => {
    setDrawerType(type);
    setIsDrawerVisible(true);
  };
  // serial index in array of fuzzers for current fuzzer

  ///Drawers (managed by drawerType)
  const drawerSelection = () => {
    switch (drawerType) {
      case "CreateFuzzer": {
        return (
          <Drawer
            title={
              <div
                style={{
                  font: "var(--font-24-32)",
                  color: "var(--title-dark)",
                }}
              >
                {t("form.title.fuzzer_create")}
              </div>
            }
            onClose={closeDrawer}
            visible={isDrawerVisible}
            {...drawerBasicConfig}
          >
            <CreateFuzzerWithVersion action={updateFuzzersCloseDrawer} />
          </Drawer>
        );
      }
      default:
        return null;
    }
  };

  //on page refresh to check if existing peroject id was typed in URL
  //leave on fuzzers page to work on /fuzzers/fuzzerId as well
  async function checkProj() {
    try {
      let response = await getProject(userDetails.userId, projectId);
      setCurrentProject(response);
      if (
        JSON.parse(localStorage.getItem("currentUser")).proj_id !== projectId
      ) {
        switchCurrentProject(userDispatch, userDetails, response);
        return response.id;
      }
    } catch (err) {
      return history.push(newURL(url));
    }
  }

  //HANDLERS FOR ACTIONS-----------------------------------------------------
  //???To Inspect
  const updateFuzzersCloseDrawer = async () => {
    await fetchFuzzers(dispatch, userDetails);
    closeDrawer();
  };

  //--------------------------------------------------------------------------------------

  // check for fuzzers being fetched to separate users with fuzzers from no fuzzers
  let isFetched = fuzzers.length > 0 ? true : false;

  //NEEDED HERE
  useEffect(() => {
    //to check url projectId, if not exist route to Project page; if exist - fetch fuzzers with new id
    (async () => {
      try {
        if (!fconfs.langs) {
          setFconfs(dispatch);
        }
        setIsFetchingCurrent(true);
        let newId = await checkProj();
        await fetchFuzzersPage(
          dispatch,
          newId ? newId : userDetails.userProjectId,
          userDetails.userId,
          {
            pageProps: {
              pgSize: 200,
              pgNum: 0,
            },
          }
        );
        setIsFetchingCurrent(false);
      } catch (error) {
        setIsFetchingCurrent(false);
        message.error(handleErrorByCode(error.code, errorHandlerConfig), 4);
      }
    })();
  }, []);
  //userDetails removed from dependency as it was causing refetch at automatic logout

  let fuzzersNotExist = () => {
    return (
      <Layout className={styles.layoutNoFuzzers}>
        <NoFuzzers
          onClick={async () => {
            showDrawer("CreateFuzzer");
          }}
        >
          {drawerSelection()}
        </NoFuzzers>
      </Layout>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Layout className="fuzzersPageLayout">
        <Skeleton
          active
          loading={isFetching || isFetchingCurrent}
          style={{
            padding: "20px",
            width: "900px",
          }}
        >
          <Sidebar
            onClickAction={() => {
              showDrawer("CreateFuzzer");
            }}
          />
          {isFetched ? (
            <Switch>
              <Route path={`${url}/:fuzzerId`}>
                <Fuzzer currentProject={currentProject} />
              </Route>
              <Redirect to={`${url}/${currentFuzzerID}`} />
            </Switch>
          ) : (
            fuzzersNotExist()
          )}
        </Skeleton>
        {drawerSelection()}
      </Layout>
    </Layout>
  );
};

export default Fuzzers;
