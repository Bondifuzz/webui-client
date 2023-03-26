import Icon from "@ant-design/icons";
import {
  Button,
  Divider,
  Drawer,
  Layout,
  Modal,
  notification,
  Pagination,
  Skeleton,
  Table,
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useHistory, useRouteMatch } from "react-router-dom";
import modalDelete from "../../components/UI/Modals/modalDelete";
import {
  CreateProject,
  CreateProjectDemo,
  ModifyProject,
  ModifyProjectDemo,
} from "../../containers/Form";
import Navbar from "../../containers/Navbar";
import {
  countProjects,
  deleteProject,
  eraseProject,
  fetchPools,
  fetchProjects,
  switchCurrentProject,
  useAuthDispatch,
  useAuthState,
  useFuzzers,
} from "../../context";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";

import { ReactComponent as EditOutlined } from "../../assets/icons/EditOutlined.svg";
import { ReactComponent as TrashOutlined } from "../../assets/icons/TrashOutlined.svg";
import { ReactComponent as BondiSofaColor } from "../../assets/images/BondiSofaColor.svg";

import AlertProjectDisabled from "../../components/UI/alerts/AlertProjectDisabled";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import CustomIcon from "../../components/UI/CustomIcon";
import ResourcesProgressBar from "../../components/UI/ResourcesProgressBar/ResourcesProgressBar";
import {
  drawerBasicConfig,
  inDevelop,
  projectCreationNotAllowed,
} from "../../config/constants";
import styles from "./Projects.module.css";

const Projects = () => {
  const userDetails = useAuthState();
  const userDispatch = useAuthDispatch();
  const errorHandlerConfig = useErrorMessageConfig();
  const { dispatch: fuzzersDispatch, fuzzersFetched } = useFuzzers();
  const { pools } = fuzzersFetched;
  const [activeProjects, setActiveProjects] = useState([]);
  const [deletedProjects, setDeletedProjects] = useState([]);
  const [openedPanel, setOpenedPanel] = useState();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerType, setDrawerType] = useState("CreateProject");
  const [isFetching, setIsFetching] = useState(false);
  const { t } = useTranslation();
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageCurrent = useRef(currentPage);
  const history = useHistory();
  let { url } = useRouteMatch();

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  const showDrawer = (type) => {
    setDrawerType(type);
    setIsDrawerVisible(true);
  };

  async function fetchActiveOuter(page) {
    try {
      setIsFetching(true);
      let response = await fetchProjects(userDetails.userId, {
        pageProps: {
          pgSize: itemsPerPage,
          pgNum: page - 1,
        },
      });
      setActiveProjects(response);
      setIsFetching(false);
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  }

  useEffect(() => {
    async function countActive() {
      try {
        let pools = await fetchPools(userDetails.userId, fuzzersDispatch);
        let count = await countProjects(userDetails.userId);
        setTotalCount(count);
      } catch (error) {
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      }
    }
    setCurrentPage(1);
    countActive();
  }, []);

  useEffect(() => {
    fetchActiveOuter(currentPage);
  }, [currentPage]);

  pageCurrent.current = currentPage;

  const updateDataActive = async () => {
    try {
      setIsFetching(true);
      let count = await countProjects(userDetails.userId);
      setTotalCount(count);
      let response = await fetchProjects(userDetails.userId, {
        pageProps: {
          pgSize: itemsPerPage,
          pgNum: pageCurrent.current - 1,
        },
      });

      if (response.length === 0 && count !== 0) {
        setCurrentPage(1);
      } else {
        setActiveProjects(response);
        setIsFetching(false);
      }
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  const updateDataDeleted = async () => {
    try {
      setIsFetching(true);
      let count = await countProjects(userDetails.userId, "TrashBin");
      setTotalCount(count);
      let response = await fetchProjects(userDetails.userId, {
        pageProps: {
          pgSize: itemsPerPage,
          pgNum: pageCurrent.current - 1,
        },
        removalState: "TrashBin",
      });

      if (response.length === 0 && count !== 0) {
        setCurrentPage(1);
      } else {
        setDeletedProjects(response);
        setIsFetching(false);
      }
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };
  const updateDataCreate = async () => {
    let count = await countProjects(userDetails.userId);
    setTotalCount(count);
    fetchActiveOuter(currentPage);
  };
  const updateDataModify = async () => {
    fetchActiveOuter(currentPage);
  };
  const updateDataDelete = async () => {
    updateDataActive();
  };
  const updateDataErase = async (source) => {
    if (source !== "fromTrash") {
      updateDataActive();
    }
    if (source === "fromTrash") {
      updateDataDeleted();
    }
  };

  const handleDeleteProject = async () => {
    const key = activeProjects[openedPanel].id;

    let failed = await (async () => {
      try {
        await deleteProject(userDetails, activeProjects[openedPanel].id);
        updateDataDelete();
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
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
        message: t("notification.message.project_deleted"),
        description: t("notification.description.project_deleted"),
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

  const handleEraseProject = async (source) => {
    //ternary is to differentiate the source of the call: should we search index from active or deleted prjcts
    const key =
      source === "fromTrash"
        ? deletedProjects[openedPanel].id
        : activeProjects[openedPanel].id;
    let failed = await (async () => {
      try {
        await eraseProject(
          userDetails,
          source === "fromTrash"
            ? deletedProjects[openedPanel].id
            : activeProjects[openedPanel].id
        );
        updateDataErase(source);
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
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
        message: t("notification.message.project_erased"),
        description: t("notification.description.project_erased"),
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

  const modalEraseProject = (source) => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.project_erased</Trans>
          </p>
          <p>{t("modal.warning.confirmation_to_procced")}</p>
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.project_erase_ok"),
      cancelText: t("modal.button.cancel"),
      okButtonProps: { type: "primary" },
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleEraseProject(source);
        Modal.destroyAll();
      },
    });
  };

  const drawerSelection = () => {
    switch (drawerType) {
      case "CreateProject": {
        return (
          <Drawer
            title={t("form.title.project_create")}
            onClose={closeDrawer}
            visible={isDrawerVisible}
            {...drawerBasicConfig}
          >
            <CreateProjectDemo
              action={() => {
                updateDataCreate();
                closeDrawer();
              }}
            />
          </Drawer>
        );
      }
      case "ModifyProject": {
        return (
          <Drawer
            title={t("form.title.project_edit")}
            onClose={closeDrawer}
            visible={isDrawerVisible}
            destroyOnClose={true}
            {...drawerBasicConfig}
          >
            <ModifyProjectDemo
              action={() => {
                updateDataModify();
                closeDrawer();
              }}
              userProject={activeProjects[openedPanel]}
            />
          </Drawer>
        );
      }
      default:
        return null;
    }
  };

  // const data = activeProjects.map((el, index) => ({
  //   ...el,
  //   key: index,
  // }));
  const data = activeProjects.map((el, index) => {
    let pool = pools.find((p) => p.id === el.pool_id);
    return {
      ...el,
      key: index,
      pool: { cpu: pool.resources.cpu_total, ram: pool.resources.ram_total },
    };
  });

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
        onClick: (event) => {
          switchCurrentProject(userDispatch, userDetails, record);
          history.push(`${url}/${record.id}`);
        },
        onMouseOver: (e) => {
          setOpenedPanel(index);
        },
      };
    },

    locale: { emptyText: <BondiSofaColor /> },
    pagination: false,
    className: "projectsTable rowPointer",
  };

  const columns = [
    {
      title: t("projects.column_title.name_project"),
      dataIndex: "name",
      width: "240px",
      ellipsis: true,
    },
    {
      title: t("projects.column_title.cpu"),
      dataIndex: ["pool", "cpu"],
      width: "150px",
    },
    {
      title: t("projects.column_title.ram"),
      dataIndex: ["pool", "ram"],
      width: "150px",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => {
        if (record.key === Number(openedPanel))
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "22px",
              }}
            >
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
                onClick={(e) => {
                  setOpenedPanel(record.key);
                  showDrawer("ModifyProject");
                  //to prevent action of click on row
                  e.stopPropagation();
                }}
              />

              <Button
                type="text"
                disabled={inDevelop}
                icon={<CustomIcon component={TrashOutlined} />}
                onClick={(e) => {
                  modalDelete(handleDeleteProject, modalEraseProject);
                  //to prevent action of click on row
                  e.stopPropagation();
                }}
              />
            </div>
          );
      },
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Layout className="projectPageLayout">
        {isFetching ? (
          <Content style={{ margin: "200px auto", width: "500px" }}>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Content>
        ) : totalCount > 0 ? (
          <>
            <Header className={styles.contentHeader}>
              <Breadcrumbs />
              <div className={styles.pageTitle}>
                <div
                  style={{
                    font: "var(--font-24-32)",
                  }}
                >
                  {t("projects.title.all_projects")}
                </div>
                <Button
                  type="primary"
                  style={{ height: "32px" }}
                  onClick={() => showDrawer("CreateProject")}
                >
                  {t("projects.button.header_add_project")}
                </Button>
              </div>
              <div className={styles.pageDescription}>
                {!inDevelop && (
                  <>
                    <ResourcesProgressBar
                      type={"cpu"}
                      value={300}
                      total={750}
                    />
                    <Divider
                      type="vertical"
                      style={{
                        color: "var(--link-pale-grey)",
                        height: "18px",
                        width: "1px",
                      }}
                    />
                    <ResourcesProgressBar
                      type={"ram"}
                      value={400}
                      total={1000}
                    />
                    <Divider
                      type="vertical"
                      style={{
                        color: "var(--link-pale-grey)",
                        height: "18px",
                        width: "1px",
                      }}
                    />
                  </>
                )}
                <Button
                  type="link"
                  className="PrimaryLink"
                  icon={
                    <Icon className="CustomIcon" component={TrashOutlined} />
                  }
                  onClick={() => history.push(`${url}/user-bin`)}
                  style={
                    inDevelop ? { paddingLeft: "0px" } : { paddingLeft: "15px" }
                  }
                >
                  {t("general.navigation_button.go_to_bin_projects")}
                </Button>
              </div>
              <div className={styles.pageDescription}>
                <div>{t("projects.descripton.current_project")}</div>
                <div style={{ color: "var(--link-active-grey)" }}>
                  &nbsp; {userDetails.userProjectName}
                </div>
              </div>
            </Header>
            <Content className={styles.contentContainer}>
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
            </Content>
          </>
        ) : (
          <>
            <Content className={styles.contentContainer}>
              <div
                style={{
                  marginTop: "150px",
                }}
              >
                <div className={styles.projectsAbscenceMessage}>
                  {t("projects.data_availability_message.no_projects_yet")}
                </div>
                <div>
                  <BondiSofaColor />
                </div>
                <Button
                  type="primary"
                  onClick={() => showDrawer("CreateProject")}
                >
                  {t("projects.button.create_project")}
                </Button>
              </div>
            </Content>
          </>
        )}
        {drawerSelection()}
        {projectCreationNotAllowed && <AlertProjectDisabled />}
      </Layout>
    </Layout>
  );
};

export default Projects;
