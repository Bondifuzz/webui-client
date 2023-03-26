import { DeleteOutlined, FireFilled, UndoOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Input,
  Layout,
  message,
  Modal,
  notification,
  Pagination,
  Skeleton,
  Table,
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as RestoreOutlined } from "../../../assets/icons/RestoreOutlined.svg";
import { ReactComponent as TrashOutlined } from "../../../assets/icons/TrashOutlined.svg";
import { ReactComponent as BondiNoResultsSmall } from "../../../assets/images/BondiNoResultsSmall.svg";
import Navbar from "../../../containers/Navbar";
import {
  countProjects,
  emptyUserBin,
  eraseProject,
  fetchPools,
  fetchProjects,
  restoreProject,
  useAuthDispatch,
  useAuthState,
  useFuzzers,
} from "../../../context";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";
import styles from "./UserBin.module.css";

import { ReactComponent as BondiSofaBW } from "../../../assets/images/BondiSofaBW.svg";
import AlertProjectDisabled from "../../../components/UI/alerts/AlertProjectDisabled";
import Breadcrumbs from "../../../components/UI/Breadcrumbs/Breadcrumbs";
import CustomIcon from "../../../components/UI/CustomIcon";
import {
  inDevelop,
  projectCreationNotAllowed,
} from "../../../config/constants";

const UserBin = () => {
  const userDetails = useAuthState();
  const errorHandlerConfig = useErrorMessageConfig();
  const { dispatch: fuzzersDispatch, fuzzersFetched } = useFuzzers();
  const { pools } = fuzzersFetched;
  const [deletedProjects, setDeletedProjects] = useState([]);
  const [openedPanel, setOpenedPanel] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const tabChanged = useRef(false);
  const pageCurrent = useRef(currentPage);

  async function fetchDeletedOuter(page) {
    try {
      setIsFetching(true);
      let response = await fetchProjects(userDetails.userId, {
        pageProps: {
          pgSize: itemsPerPage,
          pgNum: page - 1,
        },
        removalState: "TrashBin",
      });
      setDeletedProjects(response);
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
    async function countDeleted() {
      let pools = await fetchPools(userDetails.userId, fuzzersDispatch);

      let count = await countProjects(userDetails.userId, "TrashBin");
      setTotalCount(count);
    }
    setCurrentPage(1);

    countDeleted();
  }, []);
  useEffect(() => {
    try {
      //to fetch only when its not after tab switch, or fetch after tab switch but after page is reset to the first
      // check for  currentPage === 1 for case when we switch from first page to first between tabs

      fetchDeletedOuter(currentPage);

      tabChanged.current = false;
    } catch (error) {
      setIsFetching(false);
      message.error(
        handleErrorByCode(error.body.error.code, errorHandlerConfig),
        4
      );
    }
  }, [currentPage]);

  pageCurrent.current = currentPage;

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

  const handleEraseProject = async () => {
    //ternary is to differentiate the source of the call: should we search index from active or deleted prjcts
    const key = deletedProjects[openedPanel].id;

    let failed = await (async () => {
      try {
        await eraseProject(userDetails, deletedProjects[openedPanel].id);
        updateDataDeleted();
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
          <DeleteOutlined
            style={{ color: "var(--button-default-path-color)" }}
          />
        ),
      });
    }
  };
  const modalRestoreError = () => {
    Modal.confirm({
      title: (
        <p style={{ fontWeight: "600" }}>{t("modal.title.name_occupied")}</p>
      ),
      content: (
        <div>
          <p>{t("modal.content.project_new_name")}</p>
          <Form form={form}>
            <Form.Item name="newName">
              <Input placeholder={t("modal.placeholder.project_new_name")} />
            </Form.Item>
          </Form>
        </div>
      ),
      width: "500px",
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.project_rename_and_restore"),
      cancelText: t("modal.button.cancel"),
      okButtonProps: { type: "primary" },
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleRestoreProject(form.getFieldValue("newName"));
        Modal.destroyAll();
      },
    });
  };

  const handleRestoreProject = async (newName) => {
    const key = deletedProjects[openedPanel].id;
    let failed = await (async () => {
      try {
        await restoreProject(
          userDetails,
          deletedProjects[openedPanel].id,
          newName
        );
        updateDataDeleted();
        form.resetFields();
        return false;
      } catch (error) {
        form.resetFields();
        if (error.code === "E_PROJECT_EXISTS") {
          modalRestoreError();
        } else {
          return handleErrorByCode(
            error.code ? error.code : error.status,
            errorHandlerConfig
          );
        }
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
        message: t("notification.message.project_restored"),
        description: t("notification.description.project_restored"),
        //btn,
        key,
        className: "Notifications",
        icon: (
          <UndoOutlined style={{ color: "var(--button-default-path-color)" }} />
        ),
      });
    }
  };

  const handleEmptyUserBin = async () => {
    const key = userDetails.userId;

    let failed = await (async () => {
      try {
        await emptyUserBin(userDetails);
        updateDataDeleted();
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
        message: t("notification.message.user_bin_empty"),
        description: t("notification.description.user_bin_empty"),
        //btn,
        key,
        className: "Notifications",
        // onClose: async () => {
        //   await emptyUserBin(userDetails);
        //   updateDataDeleted();
        // },
        icon: (
          <DeleteOutlined
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

  const modalEmptyBin = () => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.user_bin_empty</Trans>
          </p>
          <p>{t("modal.warning.confirmation_to_procced")}</p>
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.user_bin_empty_ok"),
      cancelText: t("modal.button.cancel"),
      okButtonProps: { type: "primary" },
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleEmptyUserBin();
        Modal.destroyAll();
      },
    });
  };
  const data = deletedProjects.map((el, index) => {
    let pool = pools.find((p) => p.id === el.pool_id);

    return {
      ...el,
      key: index,
      pool: {
        cpu: pool.resources.cpu_total,
        ram: pool.resources.ram_total,
        node_count: pool.node_group.node_count,
      },
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
          // setRowActive(record.key);
          // onClick(record.key);
        },
        onMouseOver: (e) => {
          e.stopPropagation();
          setOpenedPanel(index);
        },
      };
    },

    locale: { emptyText: <BondiNoResultsSmall /> },
    pagination: false,
    className: "projectsTable",
  };

  const columns = [
    {
      title: t("projects.column_title.name_project"),
      dataIndex: "name",
      width: "240px",
    },
    {
      title: t("projects.column_title.cpu"),
      dataIndex: ["pool", "cpu"],
      width: "100px",
    },
    {
      title: t("projects.column_title.ram"),
      dataIndex: ["pool", "ram"],
      width: "150px",
    },
    {
      title: t("projects.column_title.nodes"),
      dataIndex: ["pool", "node_count"],
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
              <Button
                type="text"
                icon={<CustomIcon component={RestoreOutlined} />}
                onClick={() => handleRestoreProject()}
              >
                {t("projects.button.project_restore")}
              </Button>
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
                icon={<CustomIcon component={TrashOutlined} />}
                onClick={() => modalEraseProject()}
                disabled={inDevelop}
              />
            </div>
          );
      },
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Layout
        className="projectPageLayout"
        // style={{
        //   //paddingTop: "var(--navbar-height)",
        //   //minHeight: "100vh", OR
        //   marginTop: "var(--navbar-height)",
        //   minHeight: "calc(100vh - var(--navbar-height))",
        //   backgroundColor: "var(--content-back-color)",
        // }}
      >
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
                  {t("projects.title.bin_projects")}
                </div>
              </div>
            </Header>
            <Content className={styles.contentContainer}>
              <Skeleton active paragraph={{ rows: 3 }} />
            </Content>
          </>
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
                  {t("projects.title.bin_projects")}
                </div>
                <Button
                  type="primary"
                  disabled={inDevelop}
                  onClick={modalEmptyBin}
                  icon={<FireFilled />}
                >
                  {t("projects.button.user_bin_empty")}
                </Button>
              </div>
            </Header>
            <Content className={styles.contentContainer}>
              <div
                style={{ backgroundColor: "white" }}
                onMouseLeave={(e) => {
                  setOpenedPanel();
                }}
              >
                <Table columns={columns} {...tablesConfig}></Table>

                <Pagination
                  style={{ textAlign: "right", marginTop: "18px" }}
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
            <Header className={styles.contentHeader}>
              <Breadcrumbs />
              <div className={styles.pageTitle}>
                <div
                  style={{
                    font: "var(--font-24-32)",
                  }}
                >
                  {t("projects.title.bin_projects")}
                </div>
              </div>
            </Header>
            <Content className={styles.contentContainer}>
              <div
                style={{
                  marginTop: "150px",
                }}
              >
                <div className={styles.projectsAbscenceMessage}>
                  {t(
                    "projects.data_availability_message.no_deleted_projects_yet"
                  )}
                </div>
                <BondiSofaBW />
              </div>
            </Content>
          </>
        )}
        {projectCreationNotAllowed && <AlertProjectDisabled />}
      </Layout>
    </Layout>
  );
};

export default UserBin;
