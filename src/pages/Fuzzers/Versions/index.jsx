import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Modal,
  notification,
  Pagination,
  Skeleton,
  Table,
  Tooltip,
} from "antd";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as EditOutlined } from "../../../assets/icons/EditOutlined.svg";
import { ReactComponent as RestartOutlined } from "../../../assets/icons/RestartOutlined.svg";
import { ReactComponent as TrashOutlined } from "../../../assets/icons/TrashOutlined.svg";
import ColoredTag from "../../../components/UI/ColoredTag";
import CustomIcon from "../../../components/UI/CustomIcon";
import modalDelete from "../../../components/UI/Modals/modalDelete";
import StartStop from "../../../components/UI/StartStop/StartStop";
import {
  countVersions,
  deleteVersion,
  eraseVersion,
  fetchVersions,
  getFuzzer,
  restartVersion,
  startVersion,
  stopVersion,
  useAuthState,
  useFuzzers,
} from "../../../context";
import getActionConditions from "../../../utilities/getActionConditions";
import styles from "./Versions.module.css";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { drawerBasicConfig } from "../../../config/constants";
import CommonError from "../../../containers/CommonError/CommonError";
import { ModifyVersion } from "../../../containers/Form";
import NoItems from "../../../containers/NoItems/NoItems";
import { useApp } from "../../../context/context";
import { fetchingVersionsReducer } from "../../../context/reducer";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";

const initialStateVersions = {
  versions: [],
  isFetching: false,
  hasError: false,
};

const PanelActions = ({ item, editVersion, updateVersionsList }) => {
  const userDetails = useAuthState();
  const { fuzzersFetched } = useFuzzers();
  const errorHandlerConfig = useErrorMessageConfig();
  const { t } = useTranslation();

  const { restartDisabled, restartDisabledTooltip } = getActionConditions(item);

  let actionButtonStyles =
    item.status === "Running" ? styles.ActionButtons : null;

  const handleEdit = (e) => {
    //to not wrap Version line
    e.stopPropagation();
    //send up to Fuzzers current verion Id, and to open ModifyVersion drawer
    editVersion(item);
  };
  const handleDelete = (e) => {
    //to not wrap Version line
    e.stopPropagation();
    //send up to Fuzzers current version Id and delete Version
    modalDelete(handleDeleteVersion, modalEraseVersion, item);
  };

  const handleDeleteVersion = async (version) => {
    const key = version.id;
    let failed = await (async () => {
      try {
        await deleteVersion(
          userDetails,
          fuzzersFetched.currentFuzzerID,
          version.id
        );
        await updateVersionsList();
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
        message: t("notification.message.version_deleted"),
        description: t("notification.description.version_deleted"),
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
  const modalEraseVersion = (version) => {
    return Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.version_erased</Trans>
          </p>
          <p>{t("modal.warning.confirmation_to_procced")}</p>
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.version_erase_ok"),
      cancelText: t("modal.button.cancel"),
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleEraseVersion(version);
        Modal.destroyAll();
      },
    });
  };

  const handleEraseVersion = async (version) => {
    const key = version.id;
    let failed = await (async () => {
      try {
        await eraseVersion(
          userDetails,
          fuzzersFetched.currentFuzzerID,
          version.id
        );
        await updateVersionsList();
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
        message: t("notification.message.version_erased"),
        description: t("notification.description.version_erased"),
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

  const handleStart = async (e) => {
    try {
      e.stopPropagation();
      await startVersion(userDetails, fuzzersFetched.currentFuzzerID, item.id);
      updateVersionsList();
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };
  const handleRestart = async (e) => {
    try {
      e.stopPropagation();
      await restartVersion(
        userDetails,
        fuzzersFetched.currentFuzzerID,
        item.id
      );
      updateVersionsList();
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };
  const handleStop = async (e) => {
    try {
      e.stopPropagation();
      await stopVersion(userDetails, fuzzersFetched.currentFuzzerID, item.id);
      updateVersionsList();
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  return (
    <div className={styles.ActionsContainer}>
      <StartStop
        item={item}
        handleStart={handleStart}
        handleStop={handleStop}
      />
      <Tooltip title={restartDisabledTooltip}>
        <Button
          className={actionButtonStyles}
          disabled={restartDisabled}
          type="text"
          icon={<CustomIcon component={RestartOutlined} />}
          onClick={handleRestart}
        >
          {t("fuzzers.versions_tab.button.version_restart")}
        </Button>
      </Tooltip>

      <Button
        className={actionButtonStyles}
        type="text"
        icon={<CustomIcon component={EditOutlined} />}
        onClick={(e) => handleEdit(e)}
      ></Button>

      <Button
        className={actionButtonStyles}
        type="text"
        icon={<CustomIcon component={TrashOutlined} />}
        onClick={(e) => handleDelete(e)}
      ></Button>
    </div>
  );
};

const Versions = ({ action }) => {
  const { t } = useTranslation();
  const { dispatch: appDispatch } = useApp();
  const userDetails = useAuthState();
  const errorHandlerConfig = useErrorMessageConfig();
  const [openedPanel, setOpenedPanel] = useState(0);
  const [currentVersion, setCurrentVersion] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { fuzzersFetched, dispatch } = useFuzzers();
  const { currentFuzzerID } = fuzzersFetched;
  const [versionsFetched, dispatchVersions] = useReducer(
    fetchingVersionsReducer,
    initialStateVersions
  );
  const currPage = useRef();
  const itemsPerPage = 10;
  const timerRef = useRef(null);

  const editVersion = (version) => {
    setCurrentVersion(version);
    setIsDrawerVisible(true);
  };

  const handler = (index) => {
    setOpenedPanel(index);
    setCurrentVersion(versionsFetched.versions[index]);
  };

  const updateVersionsList = async () => {
    try {
      let count = await countVersions(userDetails, currentFuzzerID);
      setTotalCount(count);
      if (currentPage === 1) {
        await fetchVersions(dispatchVersions, userDetails, currentFuzzerID, {
          pageProps: {
            pgSize: itemsPerPage,
            pgNum: 0,
          },
        })
          .then((response) => {
            if (
              versionsFetched.versions.filter(
                (item) => item.status === "Verifying"
              ).length === 0
            ) {
              Base(response);
            }
          })
          .then(() => getFuzzer(userDetails, currentFuzzerID))
          .then((response) => {
            dispatch({
              type: "UPDATE_FUZZER",
              payload: {
                updatedFuzzer: response,
              },
            });
          })
          .catch((error) => {
            notification.error({
              message: t("notification.message.error"),
              description: handleErrorByCode(error.code, errorHandlerConfig),
              className: "Notifications",
            });
          });
      } else setCurrentPage(1);
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  const drawerSelection = () => {
    return (
      <Drawer
        title={
          <div
            style={{
              font: "var(--font-24-32)",
              color: "var(--title-dark)",
            }}
          >
            {t("form.title.version_edit")}
          </div>
        }
        onClose={() => {
          setIsDrawerVisible(false);
        }}
        visible={isDrawerVisible}
        destroyOnClose={true}
        {...drawerBasicConfig}
      >
        <ModifyVersion
          action={() => {
            updateVersionsList();
            setIsDrawerVisible(false);
          }}
          version={currentVersion}
        />
      </Drawer>
    );
  };

  //------------UseEffects
  useEffect(() => {
    appDispatch({ type: "SET_TAB", payload: { tab: "versions" } });

    //cleanup timer for "Verifying" refetching
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    async function checkVersions() {
      try {
        let count = await countVersions(userDetails, currentFuzzerID);
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
    checkVersions();
  }, [currentFuzzerID]);
  currPage.current = currentPage;
  useEffect(() => {
    async function getPageofVersions() {
      await fetchVersions(dispatchVersions, userDetails, currentFuzzerID, {
        pageProps: {
          pgSize: itemsPerPage,
          pgNum: currentPage - 1,
        },
      })
        .then((response) => Base(response))
        .then(() => getFuzzer(userDetails, currentFuzzerID))
        .then((response) => {
          dispatch({
            type: "UPDATE_FUZZER",
            payload: {
              updatedFuzzer: response,
            },
          });
        })
        .catch((error) => {
          notification.error({
            message: t("notification.message.error"),
            description: handleErrorByCode(error.code, errorHandlerConfig),
            className: "Notifications",
          });
        });
    }
    //to not proceed with fetch if fuzzer hasn't been chosen yet
    if (currentFuzzerID !== 0) {
      getPageofVersions();
    }
  }, [currentPage, currentFuzzerID]);

  // Refetching versions if includes "Verifying" one
  function fetching() {
    return fetchVersions(dispatchVersions, userDetails, currentFuzzerID, {
      pageProps: {
        pgSize: itemsPerPage,
        pgNum: currentPage - 1,
      },
    });
  }
  function Base(versions) {
    timerRef.current = setTimeout(() => {
      let versionsVerifying = versions.filter(
        (item) => item.status === "Verifying"
      );

      if (versionsVerifying.length > 0 && currPage.current === currentPage) {
        clearTimeout(timerRef.current);
        fetching().then((response) => {
          Base(response);
        });
      } else {
        clearTimeout(timerRef.current);
      }
    }, 30 * 1000);
  }

  //-------------TableData

  const data = versionsFetched.versions.map((el, index) => ({
    ...el,
    key: index,
  }));

  const columns = [
    {
      title: t("fuzzers.versions_tab.column_title.name"),
      dataIndex: "name",
      render: (_, record) => (
        <Text
          // className={styles.itemDescription}
          ellipsis={true}
          className={styles.itemName}
        >
          {record.name}
        </Text>
      ),
      width: "200px",
    },
    {
      title: t("fuzzers.versions_tab.column_title.status"),
      dataIndex: "status",
      render: (_, record) => {
        return <ColoredTag type="status" item={record} />;
      },

      width: "150px",
    },
    {
      title: t("fuzzers.versions_tab.column_title.state"),
      dataIndex: "health",
      render: (_, record) => {
        let errorWording;

        if (record.feedback) {
          let { agent, scheduler } = record.feedback;
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
            <div className={styles.itemTag}>
              <ColoredTag type="state" item={record} />
            </div>
          </Tooltip>
        );
      },
      width: "150px",
    },
    {
      title: t("fuzzers.versions_tab.column_title.cpu"),
      dataIndex: "cpu_usage",
      width: "50px",
    },
    {
      title: t("fuzzers.versions_tab.column_title.ram"),
      dataIndex: "ram_usage",
      width: "50px",
    },
    {
      title: t("fuzzers.versions_tab.column_title.description"),
      dataIndex: "description",
      render: (_, record) => {
        if (record.key !== Number(openedPanel)) {
          return (
            <Text
              className={styles.itemDescription}
              //ellipsis={{ tooltip: record.description }}
              ellipsis={true}
            >
              {record.description}
            </Text>
          );
        } else {
          return (
            <PanelActions
              editVersion={editVersion}
              updateVersionsList={updateVersionsList}
              item={record}
            />
          );
        }
      },
    },
  ];

  const tablesConfig = {
    dataSource: data,
    rowClassName: (record, index) => {
      if (record.status === "Running" && index === Number(openedPanel)) {
        return styles.panelContainerActiveRunning;
      } else if (index === Number(openedPanel)) {
        return styles.panelContainerActive;
      } else if (record.status === "Running") {
        return styles.panelContainerRunning;
      } else {
        return styles.panelContainer;
      }
    },
    onRow: (record, index) => {
      return {
        onMouseOver: (e) => {
          handler(index);
        },
      };
    },

    // locale: { emptyText: <BondiSofaColor /> },
    pagination: false,
    className: "projectsTable versionsTable",
  };

  return versionsFetched.hasError ? (
    <div className={styles.tabContainer}>
      <CommonError />
    </div>
  ) : (
    <Skeleton
      active
      paragraph={{ rows: 3 }}
      loading={versionsFetched.isFetching}
    >
      <div className={styles.tabContainer}>
        <>
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
              <Table columns={columns} {...tablesConfig} />
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
            <NoItems type={"versions"} action={action} />
          )}
        </>
        {drawerSelection()}
      </div>
    </Skeleton>
  );
};

export default Versions;
