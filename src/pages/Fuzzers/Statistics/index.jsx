import {
  Col,
  DatePicker,
  Form,
  notification,
  Radio,
  Row,
  Select,
  Skeleton,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useState, useEffect } from "react";
import {
  countStatisticsForFuzzer,
  fetchStatisticsForFuzzer,
  fetchStatisticsForVersion,
  fetchVersionsForFilters,
  useAuthState,
  useFuzzers,
} from "../../../context";
import { ReactComponent as BondiEmptyBW } from "../../../assets/images/BondiEmptyBW.svg";
import { BarChartOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Area } from "@ant-design/charts";
import convertStringToDate from "../../../utilities/convertStringToDate.js";
import styles from "./Statistics.module.css";
import convertStringToDateTime from "../../../utilities/convertStringToDateTime";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useApp } from "../../../context/context";
import NoItems from "../../../containers/NoItems/NoItems";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";

const { RangePicker } = DatePicker;

const colorsPalette = ["#A100E0", "#FF0000", "#F6FF4A", "#00F55F"];

const Statistics = ({ action }) => {
  const userDetails = useAuthState();
  const { dispatch: appDispatch } = useApp();
  const { fuzzersFetched } = useFuzzers();
  const { currentFuzzerID } = fuzzersFetched;
  const [versions, setVersions] = useState([]);
  const [statisticsExist, setStatisticsExist] = useState(false);
  const [statisticsFetched, setStatisticsFetched] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [versionToFetch, setVersionToFetch] = useState("All");
  const errorHandlerConfig = useErrorMessageConfig();
  const [dateToFetch, setDateToFetch] = useState({
    dateBegin: moment().subtract(7, "days").format("YYYY-MM-DD"),
    dateEnd: moment().format("YYYY-MM-DD"),
  });
  const [isChart, setIsChart] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    appDispatch({ type: "SET_TAB", payload: { tab: "statistics" } });
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
    async function checkStatisticsFuzzer() {
      let fetched = await countStatisticsForFuzzer(
        userDetails,
        currentFuzzerID
      );
      setStatisticsExist(fetched > 0 ? true : false);
      setIsFetching(false);
    }

    setVersionToFetch("All");
    setIsFetching(true);
    checkStatisticsFuzzer();
  }, [fuzzersFetched]);

  //
  useEffect(() => {
    async function getStatistics() {
      let response;
      if (versionToFetch === "All") {
        response = await fetchStatisticsForFuzzer(
          userDetails,
          currentFuzzerID,
          dateToFetch
        );
      } else {
        response = await fetchStatisticsForVersion(
          userDetails,
          currentFuzzerID,
          versionToFetch,
          dateToFetch
        );
      }
      setStatisticsFetched(response || []);
    }
    getStatistics();
  }, [versions, versionToFetch, dateToFetch]);

  if (isFetching) {
    return <Skeleton active paragraph={{ rows: 3, width: 3 }} />;
  }

  const setupDates = (_dates, dateStrings) => {
    if (dateStrings[0] && dateStrings[1]) {
      setDateToFetch({ dateBegin: dateStrings[0], dateEnd: dateStrings[1] });
    }
  };

  const ChartsAll = () => {
    function config(color) {
      return {
        xField: "date",
        xAxis: {
          label: { formatter: (item) => `${convertStringToDate(item)}` },
        },
        width: 600,
        padding: 50,
        // appendPadding: 10,
        color: color,

        smooth: true,
        tooltip: {
          customContent: (title, items) => {
            return (
              <div
                style={{
                  width: "120px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    marginTop: 10,
                    font: "400 14px/22px var(--font-family)",
                    color: "#8C8C8C",
                  }}
                >
                  {convertStringToDate(title)}
                </div>
                {items?.map((item, index) => {
                  const { name, value, color } = item;
                  return (
                    <div
                      style={{
                        font: "600 24px/32px var(--font-family)",
                        color: "black",
                      }}
                      key={index}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            );
          },
          marker: {
            stroke: color,
            lineWidth: 13,
          },
          crosshairs: { line: { style: { stroke: color } } },
        },
      };
    }

    return (
      <div className={styles.contentContainer}>
        <Row>
          <Col span={12}>
            <div className={styles.chartContainer}>
              <Typography className={styles.chartTitle}>
                {t("fuzzers.statistics_tab.chart_name.execs_done")}
              </Typography>
              <Area
                data={statisticsFetched}
                yField="execs_done"
                yAxis={{
                  label: { formatter: (item) => `${Number(item) / 1000000}KK` },
                }}
                {...config(colorsPalette[0])}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.chartContainer}>
              <Typography className={styles.chartTitle}>
                {t("fuzzers.statistics_tab.chart_name.execs_per_sec")}
              </Typography>
              <Area
                data={statisticsFetched}
                yField="execs_per_sec"
                {...config(colorsPalette[1])}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className={styles.chartContainer}>
              <Typography className={styles.chartTitle}>
                {t("fuzzers.statistics_tab.chart_name.known_crashes")}
              </Typography>
              <Area
                data={statisticsFetched}
                yField="known_crashes"
                {...config(colorsPalette[2])}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.chartContainer}>
              <Typography className={styles.chartTitle}>
                {t("fuzzers.statistics_tab.chart_name.unique_crashes")}
              </Typography>
              <Area
                data={statisticsFetched}
                yField="unique_crashes"
                {...config(colorsPalette[3])}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  // statisticsFetched.length === 0

  return (
    <div className={styles.tabContainer}>
      {!statisticsExist ? (
        <NoItems type={"statistics"} action={action} />
      ) : (
        <>
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
              <div style={{ textAlign: "left" }}>
                <Typography> {t("fuzzers.filters.label.date")}</Typography>
                <RangePicker
                  defaultValue={[moment().subtract(7, "days"), moment()]}
                  ranges={{
                    Today: [moment(), moment()],
                    "Last week": [moment().subtract(7, "days"), moment()],
                    "Last month": [moment().subtract(30, "days"), moment()],
                  }}
                  onChange={setupDates}
                  placement="bottomRight"
                  disabledDate={(current) =>
                    current && current > moment().endOf("day")
                  }
                />
              </div>
            </div>
            <Radio.Group
              value={isChart}
              onChange={(e) => {
                setIsChart(e.target.value);
              }}
            >
              <Space>
                <Radio.Button
                  style={{
                    color: "var(--button-default-path-color)",
                    borderColor: "var(--button-default-path-color)",
                  }}
                  value={true}
                >
                  <BarChartOutlined />
                </Radio.Button>
                <Radio.Button
                  style={{
                    color: "var(--button-default-path-color)",
                    borderColor: "var(--button-default-path-color)",
                  }}
                  value={false}
                >
                  <UnorderedListOutlined />
                </Radio.Button>
              </Space>
            </Radio.Group>
          </div>
          {statisticsFetched.length === 0 ? (
            <div style={{ textAlign: "left" }}>
              {" "}
              {t("fuzzers.statistics_tab.adjust_filter")}
            </div>
          ) : (
            <div>
              {isChart ? (
                <ChartsAll />
              ) : (
                <Table
                  scroll={{ x: 1600 }}
                  pagination={false}
                  dataSource={statisticsFetched.map((prop) => ({
                    ...prop,
                    date: convertStringToDateTime(prop.date),
                  }))}
                  columns={Object.keys(statisticsFetched[0]).map((item) => {
                    return {
                      title: (
                        <Typography
                          style={{ font: "600 12px/20px var(--font-family)" }}
                        >
                          {item}
                        </Typography>
                      ),
                      dataIndex: item,
                      key: item,
                    };
                  })}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Statistics;
