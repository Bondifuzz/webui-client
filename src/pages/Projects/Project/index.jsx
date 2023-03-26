import Icon, { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Drawer,
  Layout,
  message,
  Modal,
  notification,
  Pagination,
  Skeleton,
  Table,
  Tooltip,
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { ReactComponent as EditOutlined } from "../../../assets/icons/EditOutlined.svg";
import { ReactComponent as RestartOutlined } from "../../../assets/icons/RestartOutlined.svg";
import { ReactComponent as StartOutlined } from "../../../assets/icons/StartOutlined.svg";
import { ReactComponent as TrashOutlined } from "../../../assets/icons/TrashOutlined.svg";
import { ReactComponent as BondiFamilyLaptopColor } from "../../../assets/images/BondiFamilyLaptopColor.svg";
import { ReactComponent as BondiLensColor } from "../../../assets/images/BondiLensColor.svg";
import AlertProjectDisabled from "../../../components/UI/alerts/AlertProjectDisabled";
import Breadcrumbs from "../../../components/UI/Breadcrumbs/Breadcrumbs";
import ColoredTag from "../../../components/UI/ColoredTag";
import CustomIcon from "../../../components/UI/CustomIcon";
import modalDelete from "../../../components/UI/Modals/modalDelete";
import ResourcesProgressBar from "../../../components/UI/ResourcesProgressBar/ResourcesProgressBar";
import StartStop from "../../../components/UI/StartStop/StartStop";
import {
  drawerBasicConfig,
  inDevelop,
  projectCreationNotAllowed,
} from "../../../config/constants";
import {
  CreateFuzzerWithVersion,
  ModifyFuzzer,
  ModifyProject,
  ModifyProjectDemo,
} from "../../../containers/Form";
import Navbar from "../../../containers/Navbar";
import {
  deleteProject,
  eraseProject,
  getProject,
  restartFuzzer,
  startFuzzer,
  stopFuzzer,
  switchCurrentProject,
  useAuthDispatch,
  useAuthState,
  useFuzzers,
} from "../../../context";
import {
  countFuzzers,
  deleteFuzzer,
  eraseFuzzer,
  fetchFuzzersPage,
  fetchPools,
  setFconfs,
} from "../../../context/actions";
import getActionConditions from "../../../utilities/getActionConditions";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";
import styles from "./Project.module.css";

const Project = () => {
  let { projectId } = useParams();
  let { url } = useRouteMatch();
  const history = useHistory();
  const userDetails = useAuthState();
  const userDispatch = useAuthDispatch();
  const errorHandlerConfig = useErrorMessageConfig();
  const { t } = useTranslation();
  const { fuzzersFetched, dispatch } = useFuzzers();
  const { fuzzers, fconfs, pools } = fuzzersFetched;
  const [projectIdExists, setProjectIdExists] = useState();
  const [currentProject, setCurrentProject] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerType, setDrawerType] = useState("CreateIntegration");
  const [openedPanel, setOpenedPanel] = useState();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [actionConditions, setActionConditions] = useState({});

  const itemsPerPage = 10;
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    columnWidth: "20px",
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  const showDrawer = (type) => {
    setDrawerType(type);
    setIsDrawerVisible(true);
  };

  useEffect(() => {
    async function checkProj() {
      try {
        if (!fconfs.langs) {
          setFconfs(dispatch);
        }

        setIsFetching(true);
        let pools = await fetchPools(userDetails.userId, dispatch);
        let project = await getProject(userDetails.userId, projectId);
        if (project) {
          setProjectIdExists(true);
          if (
            JSON.parse(localStorage.getItem("currentUser")).proj_id !==
            projectId
          ) {
            await switchCurrentProject(userDispatch, userDetails, project);
          }
          setCurrentProject(project);

          let count = await countFuzzers(project.id, userDetails.userId);
          setTotalCount(count);
          if (count > 0) {
            await fetchFuzzersPage(dispatch, project.id, userDetails.userId, {
              pageProps: {
                pgSize: itemsPerPage,
                pgNum: currentPage - 1,
              },
            });
          }
          // to avoid url to compose new project id and currentfuzzer id of previous project
          else if (count === 0) {
            dispatch({ type: "RESET" });
          }
        } else {
          setProjectIdExists(false);
        }
        setIsFetching(false);
      } catch (error) {
        setProjectIdExists(false);
        setIsFetching(false);
        return message.error(
          handleErrorByCode(error.code, errorHandlerConfig),
          4
        );
      }
    }

    checkProj();
    // setFconfs(dispatch);
  }, []);

  async function fetch() {
    try {
      setIsFetching(true);
      let count = await countFuzzers(
        userDetails.userProjectId,
        userDetails.userId
      );

      setTotalCount(count);

      //condition below works as long as render is dependent on totalCount and not response.length
      if (count > 0) {
        await fetchFuzzersPage(
          dispatch,
          userDetails.userProjectId,
          userDetails.userId,
          {
            pageProps: {
              pgSize: itemsPerPage,
              pgNum: count <= itemsPerPage ? 0 : currentPage - 1,
            },
          }
        );
        //pgNum condition for case with multiple pages and deleted last from last page to not show empty list
      }

      setIsFetching(false);
    } catch (error) {
      return message.error(
        handleErrorByCode(error.code, errorHandlerConfig),
        4
      );
    }
  }

  async function refetchFuzzers() {
    setIsFetching(true);
    fetchFuzzersPage(dispatch, userDetails.userProjectId, userDetails.userId, {
      pageProps: {
        pgSize: itemsPerPage,
        pgNum: currentPage - 1,
      },
    }).catch((err) => {
      setIsFetching(false);
      return message.error(
        handleErrorByCode(err.body.error.code, errorHandlerConfig),
        4
      );
    });

    setIsFetching(false);
  }

  useEffect(() => {
    if (totalCount > 0) {
      refetchFuzzers();
    }
  }, [currentPage]);

  ///-----Manipulations with project
  const handleDeleteProject = async () => {
    let failed = await (async () => {
      try {
        await deleteProject(userDetails, currentProject.id);
        history.push(`/projects`);
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
      }
    })();
    const key = currentProject.id;
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
        //btn,
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

  const handleEraseProject = async () => {
    let failed = await (async () => {
      try {
        await eraseProject(userDetails, currentProject.id);
        history.push(`/projects`);
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
      }
    })();

    const key = currentProject.id;
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

  const modalEraseProject = () => {
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
        handleEraseProject();
        Modal.destroyAll();
      },
    });
  };

  ///-----Manipulations with fuzzers
  const handleDeleteFuzzer = async () => {
    let failed = await (async () => {
      try {
        await deleteFuzzer(userDetails, fuzzers[openedPanel].id);

        fetch();
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
      }
    })();
    const key = fuzzers[openedPanel].id;
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
        description: t("notification.description.fuzzer_deleted"),
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
    let failed = await (async () => {
      try {
        await eraseFuzzer(userDetails, fuzzers[openedPanel].id);
        fetch();
        return false;
      } catch (error) {
        return handleErrorByCode(error.code, errorHandlerConfig);
      }
    })();

    const key = fuzzers[openedPanel].id;
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

  const modalEraseFuzzer = (source) => {
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
      okButtonProps: { type: "primary" },
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleEraseFuzzer();
        Modal.destroyAll();
      },
    });
  };

  ///-----Manipulations with fuzzers' active version
  const handleStart = async (fuzzer) => {
    try {
      await startFuzzer(userDetails, fuzzer.id);
      refetchFuzzers();
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };
  const handleStop = async (fuzzer) => {
    try {
      await stopFuzzer(userDetails, fuzzer.id);
      refetchFuzzers();
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  const handleRestart = async (fuzzer) => {
    try {
      await restartFuzzer(userDetails, fuzzer.id);
      refetchFuzzers();
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  // const data = fuzzers.map((el, index) => ({
  //   ...el,
  //   // name: <Link to={`${url}/integrations`}>{el.name}</Link>,
  //   key: index,
  //   // ci_integration: el.ci_integration,
  // }));
  const data = fuzzers.map((el, index) => {
    let pool = pools.find((p) => {
      if (currentProject.pool_id) {
        return p.id === currentProject.pool_id;
      } else {
        return (
          p.id === JSON.parse(localStorage.getItem("currentUser")).proj_pool
        );
      }
    });
    return {
      ...el,
      key: index,
      pool: {
        fuzzer_max_cpu: pool.resources.fuzzer_max_cpu,
        fuzzer_max_ram: pool.resources.fuzzer_max_ram,
      },
    };
  });

  const columns = [
    {
      title: t("projects.column_title.name_fuzzer"),
      dataIndex: "name",
      width: "240px",
    },
    {
      title: t("projects.column_title.status"),
      dataIndex: ["active_revision", "status"],
      render: (_, record) => {
        if (record.active_revision) {
          return <ColoredTag type="status" item={record.active_revision} />;
        } else return null;
      },

      width: "150px",
    },
    {
      title: t("projects.column_title.state"),
      dataIndex: ["active_revision", "health"],
      render: (_, record) => {
        if (record.active_revision) {
          let errorWording;
          if (record.active_revision.feedback) {
            let { agent, scheduler } = record.active_revision.feedback;
            if (agent) {
              errorWording = t(`error.agent_error.${agent.code}`);
              if (agent.details) {
                errorWording = errorWording.concat(": ", agent.details);
              }
            } else {
              errorWording = t(`error.scheduler_error.${scheduler.code}`);
              if (scheduler.details) {
                errorWording = errorWording.concat(": ", scheduler.details);
              }
            }
          }
          return (
            <Tooltip
              title={
                errorWording ? (
                  <Text
                    className="CopyableTooltip"
                    style={{
                      display: "flex",
                      flexFlow: "row-reverse",
                    }}
                    copyable={{
                      icon: [
                        <CopyOutlined
                          style={{ color: "white", marginRight: "10px" }}
                        />,
                        <CheckOutlined style={{ marginRight: "10px" }} />,
                      ],
                    }}
                  >
                    {errorWording}
                  </Text>
                ) : null
              }
              placement={"topLeft"}
            >
              <ColoredTag type="state" item={record.active_revision} />{" "}
            </Tooltip>
          );
        } else return <div />;
      },

      width: "150px",
    },
    {
      title: t("projects.column_title.cpu"),
      dataIndex: ["active_revision", "cpu_usage"],
      render: (_, record) => {
        if (record.active_revision) {
          return (
            <ResourcesProgressBar
              type={"cpu"}
              value={record.active_revision.cpu_usage}
              total={record.pool.fuzzer_max_cpu}
              size="small"
              disabled={
                record.active_revision.status !== "Verifying" &&
                record.active_revision.status !== "Running"
              }
            />
          );
        } else return <div />;
      },
      width: "150px",
    },
    {
      title: t("projects.column_title.ram"),
      dataIndex: ["active_revision", "ram_usage"],
      render: (_, record) => {
        if (record.active_revision) {
          return (
            <ResourcesProgressBar
              type={"ram"}
              value={record.active_revision.ram_usage}
              total={record.pool.fuzzer_max_cpu}
              size="small"
              disabled={
                record.active_revision.status !== "Running" &&
                record.active_revision.status !== "Verifying"
              }
            />
          );
        } else return <div />;
      },
      width: "150px",
    },
    {
      title: t("projects.column_title.lang"),
      dataIndex: "lang",
      render: (_, record) =>
        fconfs.langs.find((item) => item.id === record.lang).display_name,
      width: "100px",
    },
    {
      title: t("projects.column_title.engine"),
      dataIndex: "engine",
      render: (_, record) =>
        fconfs.engines[record.lang].find((item) => item.id === record.engine)
          .display_name,
      width: "100px",
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
              {record.active_revision && (
                <StartStop
                  item={record.active_revision}
                  handleStart={(e) => {
                    handleStart(record);
                    e.stopPropagation();
                  }}
                  handleStop={(e) => {
                    handleStop(record);
                    e.stopPropagation();
                  }}
                />
              )}
              {record.active_revision && (
                <Tooltip title={actionConditions.restartDisabledTooltip}>
                  <Button
                    disabled={actionConditions.restartDisabled}
                    type="text"
                    icon={<CustomIcon component={RestartOutlined} />}
                    onClick={(e) => {
                      handleRestart(record);
                      e.stopPropagation();
                    }}
                  >
                    {t("fuzzers.versions_tab.button.version_restart")}
                  </Button>
                </Tooltip>
              )}
              {!record.active_revision && (
                <Tooltip
                  title={t(
                    "fuzzers.versions_tab.button.fuzzer_start_disabled_noActiveVersion"
                  )}
                >
                  <Button
                    disabled
                    type="text"
                    icon={<CustomIcon component={StartOutlined} />}
                  >
                    {t("fuzzers.versions_tab.button.version_start")}
                  </Button>
                </Tooltip>
              )}
              {!record.active_revision && (
                <Tooltip
                  title={t(
                    "fuzzers.versions_tab.button.fuzzer_restart_disabled_noActiveVersion"
                  )}
                >
                  <Button
                    disabled
                    type="text"
                    icon={<CustomIcon component={RestartOutlined} />}
                  >
                    {t("fuzzers.versions_tab.button.version_restart")}
                  </Button>
                </Tooltip>
              )}

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
                  showDrawer("ModifyFuzzer");
                  e.stopPropagation();
                }}
              />

              <Button
                type="text"
                icon={<CustomIcon component={TrashOutlined} />}
                onClick={(e) => {
                  modalDelete(handleDeleteFuzzer, modalEraseFuzzer);
                  //to prevent action of click on row
                  e.stopPropagation();
                }}
              />
            </div>
          );
      },
    },
  ];

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
          history.push(`${url}/fuzzers/${record.id}`);
        },
        onMouseOver: (e) => {
          e.stopPropagation();
          setOpenedPanel(index);
          if (fuzzers[index].active_revision) {
            let conditions = getActionConditions(
              fuzzers[index].active_revision
            );
            setActionConditions(conditions);
          }
        },
      };
    },

    // locale: { emptyText: <BondiSofaColor /> },
    pagination: false,
    className: "projectsTable rowPointer",
  };

  const MultiActions = () => {
    const dataMultiSelect = [
      {
        key: "0",
      },
    ];
    const columnsMultiselect = [
      {
        title: "",
        key: "action",
        render: (_, record) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "22px",
            }}
          >
            <div>
              {t("projects.column_title.selected_items")}
              {selectedRowKeys.length}
            </div>
            <Divider
              type="vertical"
              style={{
                color: "var(--link-pale-grey)",
                height: "38px",
                width: "1px",
              }}
            />
            <Button
              type="link"
              className="PrimaryLink"
              onClick={() => setSelectedRowKeys([])}
            >
              {t("projects.button.deselect_all")}
            </Button>
            <Divider
              type="vertical"
              style={{
                color: "var(--link-pale-grey)",
                height: "38px",
                width: "1px",
              }}
            />
            <Button
              type="text"
              icon={<Icon className="CustomIcon" component={EditOutlined} />}
              disabled={inDevelop}
            />

            <Button
              type="text"
              icon={<CustomIcon component={TrashOutlined} />}
              disabled={inDevelop}
            />
          </div>
        ),
      },
    ];
    return (
      <Table
        className="projectsTable"
        columns={columnsMultiselect}
        dataSource={dataMultiSelect}
        showHeader={false}
        pagination={false}
        style={{
          zIndex: 10,
          marginBottom: "-40px",
          height: "41px",
          position: "relative",
          marginLeft: "45px",
        }}
      />
    );
  };

  const drawerSelection = () => {
    switch (drawerType) {
      case "CreateFuzzer": {
        return (
          <Drawer
            title={t("form.title.fuzzer_create")}
            onClose={closeDrawer}
            visible={isDrawerVisible}
            {...drawerBasicConfig}
          >
            <CreateFuzzerWithVersion
              action={() => {
                fetch();
                closeDrawer();
              }}
            />
          </Drawer>
        );
      }
      case "ModifyFuzzer": {
        return (
          <Drawer
            title={t("form.title.fuzzer_edit")}
            onClose={closeDrawer}
            destroyOnClose={true}
            visible={isDrawerVisible}
            {...drawerBasicConfig}
          >
            <ModifyFuzzer
              action={() => {
                refetchFuzzers();
                closeDrawer();
              }}
              fuzzer={fuzzers[openedPanel]}
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
              action={async () => {
                let response = await getProject(userDetails.userId, projectId);
                setCurrentProject(response);
                closeDrawer();
              }}
              userProject={currentProject}
            />
          </Drawer>
        );
      }
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Navbar />
      <Layout className="projectPageLayout">
        {isFetching ? (
          <>
            <Header className={styles.contentHeader}>
              <Breadcrumbs />
              <div className={styles.pageTitle}>
                <Skeleton
                  active
                  paragraph={{ rows: 1 }}
                  style={{
                    marginTop: "var(--navbar-height)",
                  }}
                />
              </div>
            </Header>
            <Content className={styles.contentContainer}>
              <Skeleton
                active
                paragraph={{ rows: 3 }}
                style={{
                  padding: "20px",
                }}
              />
            </Content>
          </>
        ) : projectIdExists ? (
          <>
            <Header className={styles.contentHeader}>
              <Breadcrumbs />
              <div className={styles.pageTitle}>
                <div
                  style={{
                    font: "var(--font-24-32)",
                  }}
                >
                  {currentProject.name}
                </div>
                <div>
                  <Button
                    type="link"
                    className="PrimaryLink"
                    icon={
                      <Icon className="CustomIcon" component={EditOutlined} />
                    }
                    onClick={(e) => {
                      showDrawer("ModifyProject");
                    }}
                  />

                  <Button
                    type="link"
                    className="PrimaryLink"
                    icon={
                      <Icon className="CustomIcon" component={TrashOutlined} />
                    }
                    onClick={(e) => {
                      modalDelete(handleDeleteProject, modalEraseProject);
                    }}
                    disabled={inDevelop}
                  />
                  {/* Integrations service is unavailable in current version
                  <Button
                    type="default"
                    className="SecondaryButton"
                    style={{ height: "32px" }}
                  >
                    <Link to={`${url}/integrations`}>
                      {t("projects.button.to_integrations")}
                    </Link>
                  </Button> */}
                  <Button
                    type="primary"
                    style={{ height: "32px" }}
                    onClick={() => showDrawer("CreateFuzzer")}
                  >
                    {t("projects.button.header_add_fuzzer")}
                  </Button>
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
                {currentProject.description && (
                  <div>{t("projects.descripton.descripton")}</div>
                )}
                <div style={{ color: "var(--link-active-grey)" }}>
                  &nbsp; {currentProject.description}
                </div>
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
                  {hasSelected ? (
                    <MultiActions />
                  ) : (
                    <div
                      //to not have main table jump when row selected
                      style={{
                        zIndex: 10,
                        height: "1px",
                        position: "relative",
                        marginLeft: "45px",
                      }}
                    ></div>
                  )}
                  <Table
                    columns={columns}
                    rowSelection={rowSelection}
                    {...tablesConfig}
                  />
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
                <div>
                  <div className={styles.projectsAbscenceMessage}>
                    {t("projects.data_availability_message.no_fuzzers_yet")}
                  </div>
                  <div>
                    <BondiFamilyLaptopColor />
                  </div>
                  <Button
                    type="primary"
                    style={{ marginTop: "30px" }}
                    onClick={() => showDrawer("CreateFuzzer")}
                  >
                    {t("projects.button.create_fuzzer")}
                  </Button>
                </div>
              )}
            </Content>
          </>
        ) : (
          <Content className="PageContent" style={{ backgroundColor: "white" }}>
            <div style={{ marginTop: "307px" }}>
              <Title style={{ font: "var(--font-30-38)" }}>
                {t("projects.title.project_not_found")}
              </Title>
              <div>
                <BondiLensColor />
              </div>
              <Button
                onClick={() => {
                  history.push("/projects");
                }}
                type="primary"
              >
                {t("general.navigation_button.go_to_projects")}
              </Button>
            </div>
          </Content>
        )}
        {drawerSelection()}
        {projectCreationNotAllowed && <AlertProjectDisabled />}
      </Layout>
    </Layout>
  );
};

export default Project;
