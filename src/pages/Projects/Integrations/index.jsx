import {
  Button,
  Divider,
  Drawer,
  Layout,
  Modal,
  notification,
  Pagination,
  Skeleton,
  Switch,
  Table,
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { ReactComponent as EditOutlined } from "../../../assets/icons/EditOutlined.svg";
import { ReactComponent as TrashOutlined } from "../../../assets/icons/TrashOutlined.svg";
import { ReactComponent as BondiFamilyPartyColor } from "../../../assets/images/BondiFamilyPartyColor.svg";
import Breadcrumbs from "../../../components/UI/Breadcrumbs/Breadcrumbs";
import CustomIcon from "../../../components/UI/CustomIcon";
import { drawerBasicConfig } from "../../../config/constants";
import { CreateIntegration, ModifyIntegration } from "../../../containers/Form";
import Navbar from "../../../containers/Navbar";
import {
  countIntegrations,
  deleteIntegration,
  fetchIntegrationsPage,
  getIntegrationConfig,
  getProject,
  switchCurrentProject,
  toggleIntegration,
  useAuthDispatch,
  useAuthState,
} from "../../../context";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import newURL from "../../../utilities/newURL";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";
import styles from "./Integrations.module.css";

const Integrations = () => {
  let { url } = useRouteMatch();
  let { projectId } = useParams();
  const history = useHistory();
  const userDispatch = useAuthDispatch();
  const userDetails = useAuthState();
  const errorHandlerConfig = useErrorMessageConfig();
  const { t } = useTranslation();
  const [isFetching, setIsFetching] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [config, setConfig] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [openedPanel, setOpenedPanel] = useState();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerType, setDrawerType] = useState("CreateIntegration");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //on page refresh to check if existing peroject id was typed in URL
  async function checkProj() {
    try {
      let response = await getProject(userDetails.userId, projectId);
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

  //count integrations
  useEffect(() => {
    async function count() {
      try {
        setIsFetching(true);
        let newId = await checkProj();
        let count = await countIntegrations(
          newId ? newId : userDetails.userProjectId,
          userDetails.userId
        );
        setTotalCount(count);
        if (count > 0) {
          let response = await fetchIntegrationsPage(
            newId ? newId : userDetails.userProjectId,
            userDetails.userId,
            {
              pageProps: {
                pgSize: itemsPerPage,
                pgNum: currentPage - 1,
              },
            }
          );
          setIntegrations(response);
        }
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      }
    }
    setCurrentPage(1);
    count();
  }, []);

  async function fetch() {
    setIsFetching(true);
    let count = await countIntegrations(
      userDetails.userProjectId,
      userDetails.userId
    );
    setTotalCount(count);

    //condition below works as long as render is dependent on totalCount and not response.length
    if (count > 0) {
      let response = await fetchIntegrationsPage(
        userDetails.userProjectId,
        userDetails.userId,
        {
          pageProps: {
            pgSize: itemsPerPage,
            pgNum: currentPage - 1,
          },
        }
      );
      //if multiple pages and deleted last from last page to not dhow empty list
      if (response.length === 0 && count > 0) {
        setCurrentPage(1);
      } else {
        setIntegrations(response);
      }
    }

    setIsFetching(false);
  }

  async function fetchIntegrations() {
    setIsFetching(true);

    let response = await fetchIntegrationsPage(
      userDetails.userProjectId,
      userDetails.userId,
      {
        pageProps: {
          pgSize: itemsPerPage,
          pgNum: currentPage - 1,
        },
      }
    );
    setIntegrations(response);
    setIsFetching(false);
  }
  //fetch inegrations on page change
  useEffect(() => {
    if (totalCount > 0) {
      fetchIntegrations();
    }
  }, [currentPage]);

  const modalDelete = () => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.integration_erased</Trans>
          </p>
          <p>{t("modal.warning.confirmation_to_procced")}</p>
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.delete_permanently"),
      cancelText: t("modal.button.cancel"),
      okButtonProps: { type: "primary" },
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleDeleteIntegration();
        Modal.destroyAll();
      },
    });
  };

  const handleDeleteIntegration = async () => {
    let failed = await (async () => {
      try {
        await deleteIntegration(
          userDetails,
          //integrationId
          integrations[openedPanel].id
        );
        fetch();
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
      }
    })();

    const key = integrations[openedPanel].id;
    if (failed) {
      notification.error({
        message: t("notification.message.error"),
        description: failed,
        key,
        className: "Notifications",
      });
    } else {
      notification.open({
        message: t("notification.message.integration_deleted"),
        description: t("notification.description.integration_deleted"),
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

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  const showDrawer = (type) => {
    setDrawerType(type);
    setIsDrawerVisible(true);
  };
  const drawerSelection = () => {
    switch (drawerType) {
      case "CreateIntegration": {
        return (
          <Drawer
            title={t("form.title.integration_create")}
            onClose={closeDrawer}
            visible={isDrawerVisible}
            {...drawerBasicConfig}
          >
            <CreateIntegration
              action={() => {
                fetch();
                closeDrawer();
              }}
            />
          </Drawer>
        );
      }
      case "ModifyIntegration": {
        return (
          <Drawer
            title={t("form.title.integration_edit")}
            onClose={closeDrawer}
            visible={isDrawerVisible}
            destroyOnClose={true}
            {...drawerBasicConfig}
          >
            <ModifyIntegration
              integration={integrations[openedPanel]}
              config={config}
              action={() => {
                fetchIntegrations();
                closeDrawer();
              }}
            />
          </Drawer>
        );
      }
      default:
        return null;
    }
  };

  let data = integrations.map((el, index) => ({
    ...el,
    key: index,
  }));

  const tablesConfig = {
    dataSource: data,
    rowClassName: (record, index) => {
      if (index === Number(openedPanel)) {
        return styles.panelContainerActive;
      } else {
        return styles.panelContainer;
      }
    },
    onRow: (record, index) => {
      return {
        onClick: (event) => {},
        onMouseOver: (e) => {
          e.stopPropagation();

          setOpenedPanel(index);
        },
      };
    },

    //locale: { emptyText: <BondiNoResultsSmall /> },
    pagination: false,
    className: "projectsTable",
  };

  const columns = [
    {
      title: t("projects.column_title.type"),
      dataIndex: "type",
      width: "150px",
    },
    {
      title: t("projects.column_title.name_integration"),
      dataIndex: "name",
      width: "240px",
    },

    {
      title: t("projects.column_title.status"),
      dataIndex: "last_error",
      width: "340px",
    },

    {
      title: "",
      key: "action",
      render: (_, record) => {
        if (record.key === Number(openedPanel)) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "22px",
              }}
            >
              <Switch
                checked={record.enabled}
                onChange={(state) => {
                  toggleIntegration(userDetails, record.id, state)
                    .then(() => {
                      fetchIntegrations();
                    })
                    .catch((error) =>
                      notification.error({
                        message: t("notification.message.error"),
                        description: handleErrorByCode(
                          error.code,
                          errorHandlerConfig
                        ),
                        className: "Notifications",
                      })
                    );
                }}
              />

              <Divider
                type="vertical"
                style={{
                  color: "var(--link-pale-grey)",
                  height: "41px",
                  width: "1px",
                }}
              />
              <Button
                type="text"
                icon={<CustomIcon component={EditOutlined} />}
                //not working because no way to pass  setModifyDisabled(false) to outer modalDelete in Delete button
                // disabled={modifyDisabled}
                onClick={(e) => {
                  getIntegrationConfig(
                    userDetails.userProjectId,
                    userDetails.userId,
                    integrations[record.key].id
                  )
                    .then((response) => {
                      setConfig(response);
                      showDrawer("ModifyIntegration");
                    })
                    .catch((error) =>
                      notification.error({
                        message: t("notification.message.error"),
                        description: handleErrorByCode(
                          error.code,
                          errorHandlerConfig
                        ),
                        className: "Notifications",
                      })
                    );

                  //to prevent action of click on row
                  e.stopPropagation();
                }}
              />

              <Button
                type="text"
                icon={<CustomIcon component={TrashOutlined} />}
                onClick={(e) => {
                  modalDelete();
                  //to prevent action of click on row
                  //e.stopPropagation();
                }}
              />
            </div>
          );
        } else {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "22px",
              }}
            >
              <Switch
                checked={record.enabled}
                onChange={(state) => {
                  toggleIntegration(userDetails, record.id, state)
                    .then(() => {
                      fetchIntegrations();
                    })
                    .catch((error) =>
                      notification.error({
                        message: t("notification.message.error"),
                        description: handleErrorByCode(
                          error.code,
                          errorHandlerConfig
                        ),
                        className: "Notifications",
                      })
                    );
                }}
              />
            </div>
          );
        }
      },
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Layout className="projectPageLayout">
        {isFetching ? (
          <>
            <Header className={styles.contentHeader}>
              <Breadcrumbs />

              <div className={styles.pageTitle}>
                <div
                  style={{
                    font: "var(--font-24-32)",
                  }}
                >
                  {userDetails.userProjectName}
                </div>
              </div>
            </Header>
            <Content className={styles.contentContainer}>
              <Skeleton active paragraph={{ rows: 3 }} />
            </Content>
          </>
        ) : (
          <>
            <Header className={styles.contentHeader}>
              <Breadcrumbs />
              <div className={styles.pageTitle}>
                <div
                  style={{
                    font: "var(--font-24-32)",
                  }}
                >
                  {userDetails.userProjectName}
                </div>
                <Button
                  type="primary"
                  style={{ height: "32px" }}
                  onClick={() => showDrawer("CreateIntegration")}
                >
                  {t("projects.button.header_add_integration")}
                </Button>
              </div>
            </Header>
            <Content className={styles.contentContainer}>
              {totalCount > 0 ? (
                <div
                  style={{ backgroundColor: "white" }}
                  onMouseLeave={(e) => {
                    //condition is to not reset openedPanel when drawer is opened and focus is lost from the list
                    if (!isDrawerVisible) {
                      setOpenedPanel();
                    }
                  }}
                >
                  <Table columns={columns} {...tablesConfig}></Table>

                  <Pagination
                    style={{
                      textAlign: "right",
                      marginTop: "18px",
                      paddingBottom: "18px",
                    }}
                    pageSize={itemsPerPage}
                    total={totalCount}
                    onChange={(e) => {
                      setCurrentPage(e);
                    }}
                    hideOnSinglePage={true}
                    current={currentPage}
                    showSizeChanger={false}
                  />
                </div>
              ) : (
                <div
                  style={{
                    marginTop: "150px",
                  }}
                >
                  <div className={styles.projectsAbscenceMessage}>
                    {t(
                      "projects.data_availability_message.no_integrations_yet"
                    )}
                  </div>
                  <div>
                    <BondiFamilyPartyColor />
                  </div>
                  <Button
                    type="primary"
                    onClick={() => showDrawer("CreateIntegration")}
                  >
                    {t("projects.button.add_integration")}
                  </Button>
                </div>
              )}
            </Content>
          </>
        )}
        {drawerSelection()}
      </Layout>
    </Layout>
  );
};

export default Integrations;
