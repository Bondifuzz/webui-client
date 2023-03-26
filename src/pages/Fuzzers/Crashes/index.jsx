import {
  CopyOutlined,
  DownloadOutlined,
  ExportOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import {
  Button,
  Collapse,
  DatePicker,
  notification,
  Pagination,
  Radio,
  Select,
  Skeleton,
  Tabs,
  Tag,
  Typography,
} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React, { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./Crashes.module.css";

import Text from "antd/lib/typography/Text";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import NoItems from "../../../containers/NoItems/NoItems";
import {
  countCrashesForFuzzerFiltered,
  countCrashesForVersionFiltered,
  downloadCrash,
  fetchCrashesForFuzzer,
  fetchCrashesForVersion,
  fetchVersionsForFilters,
  moveCrash,
  useAuthState,
  useFuzzers,
} from "../../../context";
import { useApp } from "../../../context/context";
import convertStringToDateTime from "../../../utilities/convertStringToDateTime";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";
const { RangePicker } = DatePicker;
const initialDateRange = {
  dateBegin: moment().subtract(7, "days").format("YYYY-MM-DD"),
  dateEnd: moment().format("YYYY-MM-DD"),
};
const { TabPane } = Tabs;

const AdjustFilter = () => {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: "left" }}>
      {t("fuzzers.crashes_tab.adjust_filter")}
    </div>
  );
};

const Crashes = ({ action }) => {
  const userDetails = useAuthState();
  const { dispatch: appDispatch } = useApp();
  const errorHandlerConfig = useErrorMessageConfig();
  const { fuzzersFetched } = useFuzzers();
  const { currentFuzzerID } = fuzzersFetched;
  const [crashesExist, setCrashesExist] = useState(false);
  const [crashesFetched, setCrashesFetched] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [refetch, setRefetch] = useState();
  const [versions, setVersions] = useState([]);
  const { t } = useTranslation();
  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0);
  //Filters
  const [openedTab, setOpenedTab] = useState("Actual");
  const [versionToFetch, setVersionToFetch] = useState("All");
  const [dateToFetch, setDateToFetch] = useState(initialDateRange);
  const [isReproduced, setIsReproduced] = useState();
  const tabChanged = useRef(false);

  useEffect(() => {
    appDispatch({ type: "SET_TAB", payload: { tab: "crashes" } });
  }, []);
  useEffect(() => {
    (async () => {
      try {
        let response = await fetchVersionsForFilters(
          userDetails,
          currentFuzzerID,
          {
            pageProps: {
              pgSize: 200,
              pgNum: 0,
            },
          }
        );
        setVersions(response);
      } catch (error) {
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      }
    })();
  }, [currentFuzzerID]);

  useEffect(() => {
    async function checkCrashes() {
      let fetched = await countCrashesForFuzzerFiltered(
        userDetails,
        currentFuzzerID
      );
      setCrashesExist(fetched > 0 ? true : false);
      setIsFetching(false);
    }
    function resetFilters() {
      setVersionToFetch("All");
      setIsReproduced();
      setOpenedTab("Actual");
      setDateToFetch(initialDateRange);
    }
    resetFilters();
    setIsFetching(true);
    checkCrashes();
    //to cleanup date filter for switch between fuzzers
  }, [fuzzersFetched]);

  useEffect(() => {
    async function getCrashes() {
      let count;
      if (versionToFetch === "All") {
        count = await countCrashesForFuzzerFiltered(
          userDetails,
          currentFuzzerID,
          {
            dateToFetch,
            reproduced: isReproduced,
            archived: openedTab === "Actual" ? false : true,
          }
        );
        setTotalCount(count);
      } else {
        count = await countCrashesForVersionFiltered(
          userDetails,
          currentFuzzerID,
          versionToFetch,
          {
            dateToFetch,
            reproduced: isReproduced,
            archived: openedTab === "Actual" ? false : true,
          }
        );
        setTotalCount(count);
      }
    }
    //to have first page always opened for another version(if it has less pages than previous it will still display items )
    setCurrentPage(1);
    getCrashes();
  }, [versions, versionToFetch, dateToFetch, isReproduced, openedTab, refetch]);

  //to fetch new bunch of crashes when page is chosen
  useEffect(() => {
    async function getPageofCrashes() {
      try {
        let response;
        let pageToFetch = tabChanged.current === true ? 0 : currentPage - 1;
        if (versionToFetch === "All") {
          response = await fetchCrashesForFuzzer(userDetails, currentFuzzerID, {
            dateToFetch,
            pageProps: { pgSize: itemsPerPage, pgNum: pageToFetch },
            reproduced: isReproduced,
            archived: openedTab === "Actual" ? false : true,
          });
        } else {
          response = await fetchCrashesForVersion(
            userDetails,
            currentFuzzerID,
            versionToFetch,
            {
              dateToFetch,
              pageProps: { pgSize: itemsPerPage, pgNum: pageToFetch },
              reproduced: isReproduced,
              archived: openedTab === "Actual" ? false : true,
            }
          );
        }
        setCrashesFetched(response || []);
        tabChanged.current = false;
      } catch (error) {
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      }
    }
    getPageofCrashes();
  }, [
    currentPage,
    versions,
    versionToFetch,
    dateToFetch,
    isReproduced,
    openedTab,
    refetch,
  ]);

  const handleDownload = async (crashId) => {
    try {
      await downloadCrash(userDetails, currentFuzzerID, crashId);
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  const setupDates = (_dates, dateStrings) => {
    if (dateStrings[0] && dateStrings[1]) {
      setDateToFetch({ dateBegin: dateStrings[0], dateEnd: dateStrings[1] });
    }
  };

  const setupReproduced = (e) => {
    setIsReproduced(e.target.value);
  };

  const archiveCrash = async (crashId) => {
    try {
      await moveCrash(userDetails, currentFuzzerID, crashId, {
        archived: openedTab === "Actual" ? true : false,
      });
      setRefetch(refetch ? false : true);
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };
  const CrashesList = () => {
    return (
      <Collapse expandIconPosition="right" accordion>
        {crashesFetched.map((item) => (
          <Collapse.Panel
            key={item.id}
            header={
              <Text style={{ width: "500px", textAlign: "left" }} ellipsis>
                {convertStringToDateTime(item.created)}&emsp;{item.brief}
              </Text>
            }
            extra={
              <div
                style={{
                  width: "500px",
                  display: "flex",
                  paddingLeft: "50px",
                }}
              >
                <div style={{ width: "80px", textAlign: "left" }}>
                  <Tag color="geekblue">{item.type}</Tag>
                </div>
                <div
                  style={{
                    marginLeft: "50px",
                    width: "150px",
                    textAlign: "left",
                  }}
                >
                  <Tag color={item.reproduced ? "green" : "gold"}>
                    {item.reproduced
                      ? t("fuzzers.filters.label.reproduced_yes")
                      : t("fuzzers.filters.label.reproduced_no")}
                  </Tag>
                </div>
                <div
                  style={{
                    color: "var(--button-default-path-color)",
                    marginLeft: "50px",
                    textAlign: "left",
                  }}
                >
                  {t("fuzzers.crashes_tab.duplicates", {
                    count: item.duplicate_count,
                  })}
                </div>
              </div>
            }
            className="CrashExpandedContainer"
          >
            <div className={styles.ExpandedContainer}>
              <div className={styles.CrashActions}>
                <Button
                  icon={
                    openedTab === "Actual" ? (
                      <InboxOutlined />
                    ) : (
                      <ExportOutlined />
                    )
                  }
                  style={{
                    borderColor: "var(--button-primary-background-color)",
                    marginLeft: "15px",
                  }}
                  onClick={() => {
                    archiveCrash(item.id);
                  }}
                >
                  {openedTab === "Actual"
                    ? t("fuzzers.crashes_tab.button.crash_archive")
                    : t("fuzzers.crashes_tab.button.crash_unarchive")}
                </Button>
                <Button
                  icon={<CopyOutlined />}
                  style={{
                    borderColor: "var(--button-primary-background-color)",
                    marginLeft: "15px",
                  }}
                  onClick={() => navigator.clipboard.writeText(item.output)}
                >
                  {t("fuzzers.crashes_tab.button.crash_copy")}
                </Button>
                <Button
                  icon={<DownloadOutlined />}
                  style={{
                    backgroundColor: "var(--button-primary-background-color)",
                    marginLeft: "15px",
                    color: "white",
                  }}
                  onClick={() => handleDownload(item.id)}
                >
                  {t("fuzzers.crashes_tab.button.crash_download")}
                </Button>
              </div>

              <Paragraph className={styles.ExpandedContent}>
                <SyntaxHighlighter
                  language="c"
                  style={githubGist}
                  customStyle={{
                    backgroundColor: "var(--content-back-color)",
                    border: "none",
                  }}
                >
                  {item.output}
                </SyntaxHighlighter>
              </Paragraph>
            </div>
          </Collapse.Panel>
        ))}
      </Collapse>
    );
  };

  if (isFetching) {
    return <Skeleton active paragraph={{ rows: 3, width: 3 }} />;
  }

  return (
    <div className={styles.tabContainer}>
      {!crashesExist ? (
        <NoItems type={"crashes"} action={action} />
      ) : (
        <>
          <div
            style={{
              marginTop: "-60px",
              height: "60px",
              position: "relative",
              textAlign: "right",
              marginLeft: "400px",
            }}
          >
            <Pagination
              pageSize={itemsPerPage}
              total={totalCount}
              onChange={(e) => setCurrentPage(e)}
              hideOnSinglePage={true}
              current={currentPage}
              showSizeChanger={false}
            />
          </div>
          <div className={styles.tabContentHeader}>
            <div className={styles.filters}>
              <div style={{ textAlign: "left", marginRight: "16px" }}>
                <Typography>
                  {t("fuzzers.filters.label.version_name")}
                </Typography>
                <Select
                  defaultValue={"All"}
                  style={{ width: "230px" }}
                  onChange={setVersionToFetch}
                >
                  <Select.Option key={"All"} value={"All"}>
                    {t("fuzzers.filters.placeholder.all_versions")}
                  </Select.Option>
                  {versions.map((version) => (
                    <Select.Option key={version.id} value={version.id}>
                      {version.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div style={{ textAlign: "left", marginRight: "16px" }}>
                <Typography> {t("fuzzers.filters.label.date")}</Typography>
                <RangePicker
                  defaultValue={[moment().subtract(7, "days"), moment()]}
                  ranges={{
                    [t("general.date_picker.today")]: [moment(), moment()],
                    [t("general.date_picker.last_week")]: [
                      moment().subtract(7, "days"),
                      moment(),
                    ],
                    [t("general.date_picker.last_month")]: [
                      moment().subtract(30, "days"),
                      moment(),
                    ],
                  }}
                  onChange={setupDates}
                  placement="bottomRight"
                  disabledDate={(current) =>
                    current && current > moment().endOf("day")
                  }
                />
              </div>
              <div style={{ textAlign: "left", width: "370px" }}>
                <Radio.Group
                  options={[
                    {
                      label: t("fuzzers.filters.label.reproduced_all"),
                      value: undefined,
                    },
                    {
                      label: t("fuzzers.filters.label.reproduced_yes"),
                      value: true,
                    },
                    {
                      label: t("fuzzers.filters.label.reproduced_no"),
                      value: false,
                    },
                  ]}
                  onChange={setupReproduced}
                  value={isReproduced}
                  optionType="button"
                  style={{ marginTop: "22px" }}
                />
              </div>
            </div>
          </div>

          <Tabs
            style={{ marginTop: "-70px" }}
            tabBarStyle={{
              alignSelf: "end",
              marginRight: "20px",
              marginBottom: "24px",
            }}
            onChange={(key) => {
              setOpenedTab(key);
              tabChanged.current = true;
            }}
            activeKey={openedTab}
          >
            <TabPane tab={t("fuzzers.filters.label.archived_no")} key="Actual">
              {crashesFetched.length === 0 ? <AdjustFilter /> : <CrashesList />}
            </TabPane>
            <TabPane
              tab={t("fuzzers.filters.label.archived_yes")}
              key="Archived"
            >
              {crashesFetched.length === 0 ? <AdjustFilter /> : <CrashesList />}
            </TabPane>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default Crashes;
