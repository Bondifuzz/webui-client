import {
  CheckSquareTwoTone,
  ExclamationCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Tooltip,
} from "antd";
import Sider from "antd/lib/layout/Sider";
import Text from "antd/lib/typography/Text";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { ReactComponent as BondiNoResultsSmall } from "../../assets/images/BondiNoResultsSmall.svg";
import { useAuthState, useFuzzers } from "../../context/context";

import { Scrollbar } from "react-scrollbars-custom";
import styles from "./Sidebar.module.css";
const { Item } = Form;

const FuzzerFilter = ({ filterBy, clear }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [currentLang, setCurrentLang] = useState({});
  const { fuzzersFetched } = useFuzzers();
  const { fconfs } = fuzzersFetched;

  const handleInput = () => {
    filterBy(form.getFieldsValue(true));
  };
  const clearFilters = () => {
    form.resetFields();
    setCurrentLang("");
    filterBy(form.getFieldsValue(true));
    clear();
  };
  return (
    <Form
      form={form}
      onValuesChange={handleInput}
      name="basic"
      layout="vertical"
    >
      <Row gutter={24}>
        <Col span={12}>
          <Item label={t("sidebar.label.lang")} name="lang">
            <Select
              onChange={(e, lang) => {
                setCurrentLang({ id: lang.key, display_name: lang.value });
                form.setFieldsValue({
                  engine: fconfs.engines[lang.key][0].id,
                });
                handleInput();
              }}
              value={currentLang.id}
            >
              {fconfs.langs.map((lang) => (
                <Select.Option key={lang.id} value={lang.id}>
                  {lang.display_name}
                </Select.Option>
              ))}
            </Select>
          </Item>
        </Col>
        <Col span={12}>
          <Item label={t("sidebar.label.engine")} name="engine">
            <Select disabled={!form.isFieldTouched(["lang"])}>
              {currentLang.id &&
                fconfs.engines[currentLang.id].map((engine) => (
                  <Select.Option key={engine.id} value={engine.id}>
                    {engine.display_name}
                  </Select.Option>
                ))}
            </Select>
          </Item>
        </Col>
      </Row>
      <Col>
        <Item>
          <Button onClick={clearFilters} ghost>
            {t("sidebar.button.reset_filters")}
          </Button>
        </Item>
      </Col>
    </Form>
  );
};

const Sidebar = ({ onClickAction }) => {
  let { url } = useRouteMatch();
  const history = useHistory();
  const [formFilters] = Form.useForm();
  const [filterParams, setFilterParams] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [integration, setIntegration] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { fuzzersFetched, dispatch } = useFuzzers();
  const { fuzzers, currentFuzzerID, fconfs } = fuzzersFetched;

  const userDetails = useAuthState();

  const { t } = useTranslation();
  let currentFuzzerIndex = fuzzers.findIndex((el) => el.id === currentFuzzerID);
  const handleFilter = (dataInitial) => {
    return dataInitial.filter((item) => {
      let result = true;
      if (item.ci_integration !== integration) {
        return false;
      }
      for (let key in filterParams) {
        if (filterParams[key] === item[key]) {
          result &&= true;
        } else {
          result &&= false;
        }
      }
      result &&= item.name.includes(searchValue);
      return result;
    });
  };

  const AddFuzzerButton = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "24px",
        }}
      >
        <Button
          type="primary"
          onClick={onClickAction}
          icon={<PlusOutlined />}
          style={{
            marginTop: "24px",
            width: "105px",
          }}
        >
          {t("sidebar.button.add_fuzzer")}
        </Button>
      </div>
    );
  };

  const clearAll = () => {
    setSearchValue("");
    setIntegration(false);
    formFilters.resetFields();
  };

  //adding key, so that sort is based on index
  const data = fuzzers.map((el, index) => ({
    ...el,
    key: index,
    ci_integration: el.ci_integration,
  }));

  // columns format for Antd table
  const columnsNotExpanded = [
    {
      title: t("sidebar.column_title.name"),
      dataIndex: "name",
      render: (_, record) => {
        let errorWording;
        if (record.active_revision?.feedback) {
          errorWording = record.active_revision.feedback.agent
            ? t(
                `error.agent_error.${record.active_revision.feedback.agent.code}`
              )
            : t(
                `error.scheduler_error.${record.active_revision.feedback.scheduler.code}`
              );
        }
        return record.active_revision?.health === "Error" ? (
          <Tooltip title={errorWording}>
            <div>
              <ExclamationCircleOutlined />
              &nbsp;{record.name}
            </div>
          </Tooltip>
        ) : (
          record.name
        );
      },
    },
  ];

  const columnsExpaned = [
    {
      title: t("sidebar.column_title.name"),
      dataIndex: "name",
      render: (_, record) =>
        record.active_revision?.health === "Error" ? (
          <div>
            <ExclamationCircleOutlined />
            &nbsp;{record.name}
          </div>
        ) : (
          record.name
        ),
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      width: "400px",
    },
    {
      title: t("sidebar.column_title.ci_integration"),
      dataIndex: "ci_integration",
      render: (_, record) =>
        record.ci_integration ? (
          <div>
            <CheckSquareTwoTone twoToneColor="#9254de" />
            &nbsp;&nbsp;{t("sidebar.table_fuzzer_ci_integrated")}
          </div>
        ) : null,
      width: "150px",
    },
    {
      title: t("sidebar.column_title.lang"),
      dataIndex: "lang",
      render: (_, record) =>
        fconfs.langs.find((item) => item.id === record.lang).display_name,
      sorter: (a, b) => a.lang.localeCompare(b.lang),
    },
    {
      title: t("sidebar.column_title.engine"),
      dataIndex: "engine",
      render: (_, record) =>
        fconfs.engines[record.lang].find((item) => item.id === record.engine)
          .display_name,
      sorter: (a, b) => a.engine.localeCompare(b.engine),
    },
  ];

  const scroll = {
    width: isExpanded ? "63vw" : "23vw",
    height: `calc(100vh - 600px)`,
  };

  const components = {
    table(props) {
      return (
        <Scrollbar
          style={scroll}
          trackYProps={{
            renderer: (propsTrack) => {
              const { elementRef, style, ...restProps } = propsTrack;
              return (
                <span
                  {...restProps}
                  style={{
                    ...style,
                    background: "var(--sidebar-bckgd-dark)",
                    height: "100%",
                    top: "0",
                  }}
                  ref={elementRef}
                />
              );
            },
          }}
          thumbYProps={{
            renderer: (propsThumb) => {
              const { elementRef, style, ...restProps } = propsThumb;
              return (
                <div
                  {...restProps}
                  style={{ ...style, background: "#47465C" }}
                  ref={elementRef}
                />
              );
            },
          }}
        >
          <table>{props.children}</table>
        </Scrollbar>
      );
    },
  };
  const tablesConfig = {
    components: components,
    dataSource: handleFilter(data),
    rowKey: fuzzers.key,
    rowClassName: (record, index) => {
      let styleClass = ["onRowPointer"];
      if (record.key === currentFuzzerIndex) {
        styleClass.push(styles.TableRowActive);
      } else if (record.active_revision?.health === "Error") {
        styleClass.push(styles.FuzzerWithError);
      }

      return styleClass.join(" ");
    },
    onRow: (record, index) => {
      return {
        onClick: (event) => {
          // setRowActive(record.key);
          // onClick(record.key);

          dispatch({
            type: "SET_CURRENT",
            payload: { currentFuzzerID: fuzzersFetched.fuzzers[record.key].id },
          });
          history.push(`${url}/${fuzzersFetched.fuzzers[record.key].id}`);
        },
      };
    },
    locale: { emptyText: <BondiNoResultsSmall /> },
    pagination: false,
  };

  return fuzzers.length > 0 ? (
    <Sider className={styles.container} width={isExpanded ? "66vw" : "25vw"}>
      <div
        style={{
          textAlign: "left",
          paddingLeft: "24px",
          marginBottom: "24px",
        }}
      >
        <Space>
          <Tooltip title={t("sidebar.current_project.tooltip")}>
            <Link
              to="/projects"
              style={{
                color: "white",
              }}
            >
              <SettingOutlined />
            </Link>
          </Tooltip>
          <Text
            style={{
              color: "white",
              font: "var(--font-14-22)",
              maxWidth: "380px",
            }}
            ellipsis={{
              tooltip: userDetails.userProjectName,
            }}
          >
            <Trans
              values={{
                userProjectName: userDetails.userProjectName,
              }}
            >
              sidebar.current_project.title
            </Trans>
          </Text>
        </Space>
      </div>

      <div>
        {fuzzersFetched.hasError ? (
          <span>{t("error.common")}</span>
        ) : (
          <div className="SidebarTable">
            <Form form={formFilters}>
              <Item name="search">
                <Input.Search
                  className={styles.inputContainer}
                  placeholder={t("sidebar.placeholder.search_fuzzer")}
                  onSearch={(value) => setSearchValue(value)}
                />
              </Item>

              <div>
                {isExpanded ? (
                  <Button
                    icon={<MenuFoldOutlined />}
                    ghost
                    onClick={() => setIsExpanded(false)}
                  >
                    {t("sidebar.button.hide")}
                  </Button>
                ) : (
                  <Button
                    icon={<MenuUnfoldOutlined />}
                    ghost
                    onClick={() => setIsExpanded(true)}
                  >
                    {t("sidebar.button.expand")}
                  </Button>
                )}
              </div>

              <Item name="integration">
                <Checkbox
                  checked={integration}
                  onChange={(e) => {
                    setIntegration(e.target.checked);
                  }}
                >
                  {t("sidebar.label.ci_integration")}
                </Checkbox>
              </Item>
            </Form>
            <FuzzerFilter
              filterBy={(e) => setFilterParams(e)}
              clear={clearAll}
            />

            {isExpanded ? (
              <div>
                <Table
                  className={`${styles.TableContainer} ${styles.TableContainerExpanded}`}
                  columns={columnsExpaned}
                  {...tablesConfig}
                />
                <AddFuzzerButton />
              </div>
            ) : (
              <div>
                <Table
                  className={`${styles.TableContainer} ${styles.TableContainerWrapped}`}
                  showHeader={false}
                  columns={columnsNotExpanded}
                  {...tablesConfig}
                />
                <AddFuzzerButton />
              </div>
            )}
          </div>
        )}
      </div>
    </Sider>
  ) : null;
};

export default Sidebar;
