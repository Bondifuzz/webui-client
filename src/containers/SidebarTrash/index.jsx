import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { Form, Input, Space, Table, Tooltip } from "antd";
import Sider from "antd/lib/layout/Sider";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import { ReactComponent as BondiNoResultsSmall } from "../../assets/images/BondiNoResultsSmall.svg";
import { useAuthState } from "../../context";
import styles from "./SidebarTrash.module.css";

const { Item } = Form;

const SidebarTrash = ({ fuzzList, selectFuzzer }) => {
  const userDetails = useAuthState();
  const [isExpanded, setIsExpanded] = useState(false);
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState("");
  const [rowActive, setRowActive] = useState(0);
  const { t } = useTranslation();
  //for Sidebar list refresh cases
  useEffect(() => {
    setRowActive(0);
  }, [fuzzList]);
  const columnsNotExpanded = [
    {
      title: t("sidebar.column_title.name"),
      dataIndex: "name",
    },
  ];
  let list = fuzzList
    .map((el, index) => ({
      ...el,
      key: index,
      ci_integration: el.ci_integration,
    }))
    .filter((el) => el.name.includes(searchValue));

  const scroll = {
    width: isExpanded ? "64vw" : "23vw",
    height: "500px",
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

  return (
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

      <div className="SidebarTable">
        <Form form={form}>
          <Item name="search">
            <Input.Search
              className={styles.inputContainer}
              placeholder={t("sidebar.placeholder.search_fuzzer")}
              onSearch={(value) => setSearchValue(value)}
            />
          </Item>
        </Form>
        {fuzzList.length === 0 ? (
          <div style={{ color: "white" }}>
            {t("sidebar.data_availability_message.no_deleted_fuzzers")}
          </div>
        ) : (
          <div>
            <Table
              className={`${styles.TableContainer} ${styles.TableContainerWrapped}`}
              rowClassName={(record, index) =>
                record.key === rowActive ? styles.TableRowActive : null
              }
              dataSource={list.map((item) => ({
                ...item,
                name: item.erasure_date ? (
                  <div>
                    <DeleteOutlined />
                    &nbsp;{item.name}
                  </div>
                ) : (
                  item.name
                ),
              }))}
              showHeader={false}
              locale={{ emptyText: <BondiNoResultsSmall /> }}
              columns={columnsNotExpanded}
              components={components}
              rowKey={list.key}
              pagination={false}
              //scroll={{ y: 500 }}
              onRow={(record, index) => {
                return {
                  onClick: (event) => {
                    setRowActive(record.key);
                    selectFuzzer(record.key);
                  },
                };
              }}
            />
          </div>
        )}
      </div>
    </Sider>
  );
};

export default SidebarTrash;
