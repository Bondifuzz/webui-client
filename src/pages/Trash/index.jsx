import { DeleteOutlined, FireFilled, UndoOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  List,
  Modal,
  notification,
  Skeleton,
  Tooltip,
} from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useReducer, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as BondiEmptyTrashBW } from "../../assets/images/BondiEmptyTrashBW.svg";
import { ReactComponent as BondiNoResultsBW } from "../../assets/images/BondiNoResultsBW.svg";
import WrapButton from "../../components/UI/WrapButton/WrapButton";
import CommonError from "../../containers/CommonError/CommonError";
import Navbar from "../../containers/Navbar";
import SidebarTrash from "../../containers/SidebarTrash";
import {
  cleanupFuzzer,
  emptyProjectBin,
  eraseVersion,
  fetchFuzzersTrashBin,
  fetchVersions,
  restoreFuzzer,
  restoreVersion,
  useAuthState,
} from "../../context";
import { fetchingVersionsReducer } from "../../context/reducer";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
import styles from "./Trash.module.css";
const { Item } = Form;
const initialStateVersions = {
  versions: [],
  isFetching: false,
  hasError: false,
};

const TrashVersions = ({ versions, restore, erase, error }) => {
  const [openedPanel, setOpenedPanel] = useState();
  const { t } = useTranslation();
  if (error) {
    return <CommonError />;
  }
  if (versions.length === 0) {
    return <BondiNoResultsBW />;
  }
  return (
    <List
      dataSource={versions}
      bordered={true}
      onMouseLeave={(e) => {
        setOpenedPanel();
      }}
      renderItem={(item, index) => (
        <List.Item
          className={
            index === Number(openedPanel)
              ? styles.PanelContainerActive
              : styles.PanelContainer
          }
          key={item.id}
          onMouseOver={(e) => {
            e.stopPropagation();
            setOpenedPanel(index);
          }}
          actions={
            index === Number(openedPanel) && item.erasure_date
              ? [
                  <Button
                    type="text"
                    icon={<UndoOutlined />}
                    onClick={() => restore(versions[openedPanel])}
                  >
                    {t("trash.button.version_restore")}
                  </Button>,
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => erase(versions[openedPanel])}
                  >
                    {t("trash.button.version_erase")}
                  </Button>,
                ]
              : [null]
          }
        >
          <div>
            {item.erasure_date ? (
              <div>
                <DeleteOutlined />
                &nbsp;{item.name}
              </div>
            ) : (
              item.name
            )}
          </div>
        </List.Item>
      )}
    />
  );
};

const Trash = () => {
  const userDetails = useAuthState();
  const errorHandlerConfig = useErrorMessageConfig();
  const [fuzzersTrash, setFuzzersTrash] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [versionsFetched, dispatchVersions] = useReducer(
    fetchingVersionsReducer,
    initialStateVersions
  );
  const [selectedFuzzer, setSelectedFuzzer] = useState({});
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState("");
  const [formRestore] = Form.useForm();
  const { t } = useTranslation();
  const updateData = async () => {
    try {
      let fuzzers = await fetchFuzzersTrashBin(userDetails);
      setFuzzersTrash(fuzzers);
      if (fuzzers.length !== 0) {
        setSelectedFuzzer(fuzzers[0]);
      } else {
        setSelectedFuzzer({});
      }
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };

  let isFetched = fuzzersTrash?.length > 0 ? true : false;
  let filteredVersions = versionsFetched.versions.filter((el) =>
    el.name.includes(searchValue)
  );

  useEffect(() => {
    setIsFetching(true);
    setIsFetching(true);
    fetchFuzzersTrashBin(userDetails)
      .then((response) => {
        setFuzzersTrash(response);
        return response[0];
      })
      .then((response) => {
        setIsFetching(false);
        setSelectedFuzzer(response);
      })
      .catch((error) => {
        setIsFetching(false);
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      });
  }, []);

  useEffect(() => {
    if (isFetched) {
      fetchVersions(dispatchVersions, userDetails, selectedFuzzer.id, {
        removalState: selectedFuzzer.erasure_date ? "All" : "TrashBin",
      }).catch((error) => {
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      });
    }
  }, [selectedFuzzer]);

  const selectFuzzer = (index) => {
    setSelectedFuzzer(fuzzersTrash[index]);
  };

  const modalRestoreError = (objectType, version) => {
    Modal.confirm({
      title: (
        <p style={{ fontWeight: "600" }}> {t("modal.title.name_occupied")} </p>
      ),
      content: (
        <div>
          <p>
            {objectType === "Fuzzer"
              ? t("modal.content.fuzzer_new_name")
              : t("modal.content.version_new_name")}
          </p>
          <Form form={formRestore}>
            <Form.Item name="newName">
              <Input placeholder={t("modal.placeholder.new_name")} />
            </Form.Item>
          </Form>
        </div>
      ),
      width: "500px",
      maskClosable: true,
      closable: true,
      centered: true,
      okText:
        objectType === "Fuzzer"
          ? t("modal.button.fuzzer_rename_and_restore")
          : t("modal.button.version_rename_and_restore"),
      cancelText: t("modal.button.cancel"),
      okButtonProps: { type: "primary" },
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        objectType === "Fuzzer"
          ? handleRestoreFuzzer(formRestore.getFieldValue("newName"))
          : handleRestoreVersion(version, formRestore.getFieldValue("newName"));
        Modal.destroyAll();
      },
    });
  };

  const handleRestoreFuzzer = async (newName) => {
    const key = selectedFuzzer.id;
    let failed = await (async () => {
      try {
        await restoreFuzzer(userDetails, selectedFuzzer.id, newName);
        updateData();
        formRestore.resetFields();
        return false;
      } catch (error) {
        formRestore.resetFields();
        if (error.code === "E_FUZZER_EXISTS") {
          modalRestoreError("Fuzzer");
        } else
          return handleErrorByCode(
            error.code ? error.code : error.status,
            errorHandlerConfig
          );
      }
    })();
    if (failed) {
      return notification.error({
        message: t("notification.message.error"),
        description: failed,
        key,
        className: "Notifications",
      });
    } else if (failed !== undefined) {
      notification.open({
        message: t("notification.message.fuzzer_restored"),
        description: t("notification.description.fuzzer_restored"),
        key,
        className: "Notifications",
        icon: (
          <UndoOutlined style={{ color: "var(--button-default-path-color)" }} />
        ),
      });
    }
  };

  const handleRestoreVersion = async (version, newName) => {
    const key = version.id;

    let failed = await (async () => {
      try {
        await restoreVersion(
          userDetails,
          selectedFuzzer.id,
          version.id,
          newName
        );
        updateData();
        formRestore.resetFields();
        return false;
      } catch (error) {
        formRestore.resetFields();
        if (error.code === "E_REVISION_EXISTS") {
          modalRestoreError("Version", version);
        } else
          return handleErrorByCode(
            error.code ? error.code : error.status,
            errorHandlerConfig
          );
      }
    })();
    if (failed) {
      return notification.error({
        message: t("notification.message.error"),
        description: failed,
        key,
        className: "Notifications",
      });
    } else if (failed !== undefined) {
      notification.open({
        message: t("notification.message.version_restored"),
        description: t("notification.description.version_restored"),
        key,
        className: "Notifications",
        icon: (
          <UndoOutlined style={{ color: "var(--button-default-path-color)" }} />
        ),
      });
    }
  };
  const modalEraseVersion = (version) => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.version_erased</Trans>
            <p>{t("modal.warning.confirmation_to_procced")}</p>
          </p>
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
      },
    });
  };
  const handleEraseVersion = async (version) => {
    const key = version.id;

    let failed = await (async () => {
      try {
        await eraseVersion(userDetails, selectedFuzzer.id, version.id);
        await updateData();
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
          <DeleteOutlined
            style={{ color: "var(--button-default-path-color)" }}
          />
        ),
      });
    }
  };

  const modalCleanupFuzzer = () => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          {selectedFuzzer.erasure_date ? (
            <p>
              <Trans>modal.warning.fuzzer_cleanup_with_fuzzer</Trans>

              <p>{t("modal.warning.confirmation_to_procced")}</p>
            </p>
          ) : (
            <p>
              <Trans>modal.warning.fuzzer_cleanup_without_fuzzer</Trans>

              <p>{t("modal.warning.confirmation_to_procced")}</p>
            </p>
          )}
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.fuzzer_cleanup_ok"),
      cancelText: t("modal.button.cancel"),
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleCleanupFuzzer();
        Modal.destroyAll();
      },
    });
  };

  const handleCleanupFuzzer = async () => {
    let failed = await (async () => {
      try {
        await cleanupFuzzer(userDetails, selectedFuzzer.id);
        updateData();
        return false;
      } catch (error) {
        return handleErrorByCode(
          error.code ? error.code : error.status,
          errorHandlerConfig
        );
      }
    })();

    const key = selectedFuzzer.id;

    if (failed) {
      notification.error({
        message: t("notification.message.error"),
        description: failed,
        key,
        className: "Notifications",
      });
    } else {
      notification.open({
        message: t("notification.message.fuzzer_cleanup"),
        description: t("notification.description.fuzzer_cleanup"),
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

  const modalEmptyBin = () => {
    Modal.confirm({
      content: (
        <div style={{ marginLeft: "38px", maxWidth: "300px" }}>
          <p>
            <Trans>modal.warning.project_bin_empty</Trans>
            <p>{t("modal.warning.confirmation_to_procced")}</p>
          </p>
        </div>
      ),
      maskClosable: true,
      closable: true,
      centered: true,
      okText: t("modal.button.project_bin_empty_ok"),
      cancelText: t("modal.button.cancel"),
      cancelButtonProps: { className: "SimpleButton" },
      onOk: () => {
        handleEmptyBin();
        Modal.destroyAll();
      },
    });
  };

  const handleEmptyBin = async () => {
    const key = userDetails.userId;
    let failed = await (async () => {
      try {
        await emptyProjectBin(userDetails);
        updateData();
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
        message: t("notification.message.project_bin_empty"),
        description: t("notification.description.project_bin_empty"),
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

  return (
    <Layout>
      {!isFetching && (
        <SidebarTrash fuzzList={fuzzersTrash} selectFuzzer={selectFuzzer} />
      )}
      <Layout>
        <Navbar />
        {isFetching ? (
          <Skeleton active paragraph={{ rows: 3, width: 3 }} />
        ) : (
          <Layout className={styles.layout}>
            {isFetched && (
              <Header className={styles.fuzzerHeader}>
                <div className={styles.fuzzerTitle}>
                  <h1
                    style={{
                      font: "var(--font-30-38)",
                    }}
                  >
                    {selectedFuzzer.name}
                  </h1>
                </div>
                <div className={styles.fuzzerActions}>
                  {selectedFuzzer.erasure_date && (
                    <WrapButton
                      icon={<UndoOutlined />}
                      //for no argument to be sent
                      onClick={() => handleRestoreFuzzer()}
                    >
                      {t("trash.button.fuzzer_restore")}
                    </WrapButton>
                  )}
                  <WrapButton
                    icon={<DeleteOutlined />}
                    onClick={modalCleanupFuzzer}
                  >
                    {t("trash.button.fuzzer_cleanup")}
                  </WrapButton>
                  <Tooltip>
                    <Button
                      icon={<FireFilled />}
                      className="SimpleButton"
                      style={{
                        borderColor: "var(--button-default-path-color)",
                        height: "40px",
                      }}
                      onClick={modalEmptyBin}
                    >
                      {t("trash.button.project_bin_empty")}
                    </Button>
                  </Tooltip>
                </div>
              </Header>
            )}

            <Content className={styles.pageContainer}>
              {
                //to show loading for fetchVersions and for before fuzzerFetching
                versionsFetched.isFetching ||
                (versionsFetched.versions.length === 0 &&
                  selectedFuzzer &&
                  versionsFetched.isFetching) ? (
                  <Skeleton active paragraph={{ rows: 3, width: 3 }} />
                ) : versionsFetched.versions.length === 0 ||
                  fuzzersTrash.length === 0 ? (
                  <div
                    style={{
                      marginTop: "70px",
                    }}
                  >
                    <div
                      style={{
                        font: "var(--font-20-28)",
                        color: "var(--title-faint)",
                        marginBottom: "24px",
                      }}
                    >
                      {t("trash.data_availability_message.no_deleted_versions")}
                    </div>
                    <BondiEmptyTrashBW />
                  </div>
                ) : (
                  <>
                    <Form form={form} className={styles.formContainer}>
                      <Item name="search">
                        <Input.Search
                          className={styles.inputContainer}
                          placeholder={t("trash.placeholder.search_version")}
                          onSearch={(value) => setSearchValue(value)}
                          allowClear
                        />
                      </Item>
                    </Form>
                    <TrashVersions
                      versions={filteredVersions}
                      restore={handleRestoreVersion}
                      erase={modalEraseVersion}
                      error={versionsFetched.hasError}
                    />
                  </>
                )
              }
            </Content>
          </Layout>
        )}
      </Layout>
    </Layout>
  );
};

export default Trash;
