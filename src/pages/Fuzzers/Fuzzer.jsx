import {
  Button,
  Divider,
  Drawer,
  Dropdown,
  Layout,
  Modal,
  notification,
  Radio,
  Skeleton,
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { ReactComponent as DownloadOutlined } from "../../assets/icons/DownloadOutlined.svg";
import { ReactComponent as EditOutlined } from "../../assets/icons/EditOutlined.svg";
import { ReactComponent as TrashOutlined } from "../../assets/icons/TrashOutlined.svg";
import { ReactComponent as BondiLensBW } from "../../assets/images/BondiLensBW.svg";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import CustomIcon from "../../components/UI/CustomIcon";

import {
  BarChartOutlined,
  BranchesOutlined,
  BugOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { Trans, useTranslation } from "react-i18next";
import { Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {
  Redirect,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import DownloadMenu from "../../components/UI/DownloadMenu/DownloadMenu";
import modalDelete from "../../components/UI/Modals/modalDelete";
import ResourcesProgressBar from "../../components/UI/ResourcesProgressBar/ResourcesProgressBar";
import { drawerBasicConfig, inDevelop } from "../../config/constants";
import { CreateVersion, ModifyFuzzer } from "../../containers/Form";
import {
  deleteFuzzer,
  eraseFuzzer,
  fetchFuzzers,
  fetchFuzzersPage,
  getFuzzer,
  getLastVersionImage,
  useAuthState,
  useFuzzers,
} from "../../context";
import { useApp } from "../../context/context";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import newURL from "../../utilities/newURL";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
import Crashes from "./Crashes";
import styles from "./Fuzzers.module.css";
import Statistics from "./Statistics";
import Versions from "./Versions";

const Fuzzer = ({ currentProject }) => {
  let { fuzzerId } = useParams();
  let { url } = useRouteMatch();
  const userDetails = useAuthState();
  const { appConfig, dispatch: appDispatch } = useApp();
  const errorHandlerConfig = useErrorMessageConfig();
  const { t } = useTranslation();
  const { fuzzersFetched, dispatch } = useFuzzers();
  const { fuzzers, currentFuzzerID } = fuzzersFetched;
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [fuzzerIdExists, setFuzzerIdExists] = useState();
  const [drawerType, setDrawerType] = useState();
  const [lastImage, setLastImage] = useState();

  const history = useHistory();
  const [activeVersion, setActiveVersion] = useState({});

  let currfuzz = fuzzerId ? fuzzerId : currentFuzzerID;
  let currentFuzzerIndex = fuzzers.findIndex((el) => el.id === currfuzz);
  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  const showDrawer = (type) => {
    setDrawerType(type);
    setIsDrawerVisible(true);
  };
  const updateFuzzersCloseDrawer = async () => {
    await fetchFuzzersPage(
      dispatch,
      userDetails.userProjectId,
      userDetails.userId,
      {
        pageProps: {
          pgSize: 200,
          pgNum: 0,
        },
      }
    );
    closeDrawer();
  };

  //------Handlers for fuzzer actions
  const modalEraseFuzzer = () => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.fuzzer_erased</Trans>
          </p>
          <p>{t("modal.warning.confirmation_to_procced")}</p>
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.fuzzer_erase_ok"),
      cancelText: t("modal.button.cancel"),
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleEraseFuzzer();
        Modal.destroyAll();
      },
    });
  };

  const handleDeleteFuzzer = async () => {
    let failed = await (async () => {
      try {
        await deleteFuzzer(userDetails, currentFuzzerID);
        await fetchFuzzers(dispatch, userDetails);
        history.push(`${newURL(url)}/fuzzers`);
        return false;
      } catch (error) {
        return handleErrorByCode(error.code, errorHandlerConfig);
      }
    })();
    const key = currentFuzzerID;

    if (failed) {
      notification.error({
        message: t("notification.message.error"),
        description: failed,
        key,
        className: "Notifications",
      });
    } else {
      notification.open({
        message: t("notification.message.fuzzer_deleted"),
        description: <div>{t("notification.description.fuzzer_deleted")}</div>,
        key,
        className: "Notifications",
        icon: (
          <CustomIcon
            component={TrashOutlined}
            style={{ color: "var(--button-default-path-color)" }}
          />
        ),
      });
    }
  };

  const handleEraseFuzzer = async () => {
    const key = currentFuzzerID;
    let failed = await (async () => {
      try {
        await eraseFuzzer(userDetails, currentFuzzerID);
        await fetchFuzzers(dispatch, userDetails);
        history.push(`${newURL(url)}/fuzzers`);
        return false;
      } catch (error) {
        return handleErrorByCode(error.code, errorHandlerConfig);
      }
    })();

    if (failed) {
      notification.error({
        message: t("notification.message.error"),
        description: failed,
        key,
        className: "Notifications",
      });
    } else {
      notification.open({
        message: t("notification.message.fuzzer_erased"),
        description: t("notification.description.fuzzer_erased"),
        key,
        className: "Notifications",
        icon: (
          <CustomIcon
            component={TrashOutlined}
            style={{ color: "var(--button-default-path-color)" }}
          />
        ),
      });
    }
  };

  const NoFuzzer = () => {
    return (
      <Content className={styles.contentContainer}>
        <div style={{ marginTop: "307px" }}>
          <Title style={{ font: "var(--font-30-38)" }}>
            {t("fuzzers.data_availability_message.fuzzer_not_found")}
          </Title>
          <div>
            <BondiLensBW />
          </div>
        </div>
      </Content>
    );
  };

  useEffect(() => {
    async function fetch() {
      setIsFetching(true);
      try {
        let fuzzer = await getFuzzer(userDetails, fuzzerId);
        if (fuzzer.erasure_date !== null) {
          return history.push(`/trash`);
        }
        dispatch({
          type: "SET_CURRENT",
          payload: { currentFuzzerID: fuzzer.id },
        });
        setActiveVersion(fuzzer.active_revision);
        setFuzzerIdExists(true);
        let imageId = await getLastVersionImage(userDetails, fuzzer.id);
        setLastImage(imageId);
        setIsFetching(false);
      } catch (error) {
        if (error.code === "E_FUZZER_NOT_FOUND") {
          setFuzzerIdExists(false);
        }
        setIsFetching(false);
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          //key,
          className: "Notifications",
        });
      }
    }
    fetch();
  }, [fuzzerId]);

  //to have resources and activerevision info after restart/start version
  useEffect(() => {
    setActiveVersion(fuzzers[currentFuzzerIndex]?.active_revision);
  }, [fuzzers]);

  //Drawers (managed by drawerType)
  const drawerSelection = () => {
    switch (drawerType) {
      case "CreateVersion": {
        return (
          <Drawer
            title={
              <div
                style={{
                  font: "var(--font-24-32)",
                  color: "var(--title-dark)",
                }}
              >
                {t("form.title.version_create")}
              </div>
            }
            onClose={closeDrawer}
            visible={isDrawerVisible}
            {...drawerBasicConfig}
          >
            <CreateVersion
              action={() => {
                closeDrawer();
                appDispatch({ type: "SET_TAB", payload: { tab: "versions" } });
                history.push(`${url}`);
              }}
              fuzzer={fuzzers[currentFuzzerIndex]}
              lastImage={lastImage}
            />
          </Drawer>
        );
      }
      case "ModifyFuzzer": {
        return (
          <Drawer
            title={
              <div
                style={{
                  font: "var(--font-24-32)",
                  color: "var(--title-dark)",
                }}
              >
                {t("form.title.fuzzer_edit")}
              </div>
            }
            onClose={closeDrawer}
            visible={isDrawerVisible}
            destroyOnClose={true}
            {...drawerBasicConfig}
          >
            <ModifyFuzzer
              action={updateFuzzersCloseDrawer}
              fuzzer={fuzzers[currentFuzzerIndex]}
            />
          </Drawer>
        );
      }
      default:
        return null;
    }
  };

  return (
    <Layout className={styles.layout}>
      {isFetching ? (
        <Header className={styles.contentHeader}>
          <Skeleton
            active
            loading={isFetching}
            paragraph={{ rows: 2 }}
            style={{
              width: "900px",
            }}
          />
        </Header>
      ) : fuzzerIdExists ? (
        <>
          <Header className={styles.contentHeader}>
            <Breadcrumbs />
            <Skeleton
              active
              loading={isFetching}
              style={{
                padding: "20px",
                width: "900px",
              }}
            >
              <div className={styles.pageTitle}>
                <div
                  style={{
                    font: "var(--font-24-32)",
                  }}
                >
                  {fuzzers[currentFuzzerIndex].name}
                </div>
                <div className={styles.fuzzerActions}>
                  <Button
                    type="link"
                    className="PrimaryLink PrimaryLinkIcon"
                    icon={
                      <CustomIcon
                        component={EditOutlined}
                        //style={{ color: "var(--button-default-path-color)" }}
                      />
                    }
                    onClick={() => showDrawer("ModifyFuzzer")}
                  />

                  <Button
                    type="link"
                    className="PrimaryLink PrimaryLinkIcon"
                    icon={<CustomIcon component={TrashOutlined} />}
                    onClick={() =>
                      modalDelete(handleDeleteFuzzer, modalEraseFuzzer)
                    }
                  />
                  <Dropdown overlay={<DownloadMenu />}>
                    <Button
                      type="default"
                      className="SecondaryButton"
                      style={{ height: "32px" }}
                      icon={<CustomIcon component={DownloadOutlined} />}
                    >
                      {t("fuzzers.button.fuzzer_download")}
                    </Button>
                  </Dropdown>

                  {fuzzers[currentFuzzerIndex].ci_integration === false && (
                    <Button
                      type="primary"
                      style={{ height: "32px" }}
                      onClick={() => showDrawer("CreateVersion")}
                    >
                      {t("fuzzers.button.add_version")}
                    </Button>
                  )}
                </div>
              </div>

              <div className={styles.pageDescription}>
                {!inDevelop && (
                  <>
                    <ResourcesProgressBar type={"cpu"} value={30} total={75} />
                    <Divider
                      type="vertical"
                      style={{
                        color: "var(--link-pale-grey)",
                        height: "18px",
                        width: "1px",
                        paddingRight: "18px",
                      }}
                    />
                    <ResourcesProgressBar type={"ram"} value={30} />
                  </>
                )}
              </div>
              <div className={styles.pageDescription}>
                {activeVersion && (
                  <div>
                    {t("fuzzers.active_version")}
                    <span style={{ color: "var(--link-active-grey)" }}>
                      &nbsp; {activeVersion.name}
                    </span>
                  </div>
                )}

                {activeVersion && fuzzers[currentFuzzerIndex].description && (
                  <Divider
                    type="vertical"
                    style={{
                      color: "var(--link-pale-grey)",
                      height: "18px",
                      width: "1px",
                    }}
                  />
                )}

                {fuzzers[currentFuzzerIndex].description && (
                  <div>
                    {t("fuzzers.description")}
                    <span style={{ color: "var(--link-active-grey)" }}>
                      &nbsp; {fuzzers[currentFuzzerIndex].description}
                    </span>
                  </div>
                )}
              </div>
            </Skeleton>
          </Header>

          <Content className={styles.contentContainer}>
            <div
              style={{
                margin: "40px 20px",
              }}
            >
              <Radio.Group
                value={appConfig.fuzzerTab}
                onChange={(e) => {
                  history.push(`${url}/${e.target.value}`);
                }}
                style={{ display: "flex" }}
              >
                <Radio.Button value={"versions"} className="FuzzerTabs">
                  <BranchesOutlined /> {t("fuzzers.tab_name.versions")}
                </Radio.Button>
                <Radio.Button value={"crashes"} className="FuzzerTabs">
                  <BugOutlined /> {t("fuzzers.tab_name.crashes")}
                </Radio.Button>
                <Radio.Button value={"statistics"} className="FuzzerTabs">
                  <BarChartOutlined /> {t("fuzzers.tab_name.statistics")}
                </Radio.Button>
              </Radio.Group>

              <Switch>
                <Route path={`${url}/versions`}>
                  <Versions action={() => showDrawer("CreateVersion")} />
                </Route>
                <Route path={`${url}/crashes`}>
                  <Crashes action={() => showDrawer("CreateVersion")} />
                </Route>
                <Route path={`${url}/statistics`}>
                  <Statistics action={() => showDrawer("CreateVersion")} />
                </Route>
                <Redirect to={`${url}/versions`} />
              </Switch>
            </div>
            {drawerSelection()}
          </Content>
        </>
      ) : (
        <NoFuzzer />
      )}
    </Layout>
  );
};

export default Fuzzer;
