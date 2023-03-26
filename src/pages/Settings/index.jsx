import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Divider,
  Form,
  Input,
  notification,
  PageHeader,
  Skeleton,
  Switch,
} from "antd";
import React, { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import PublicPageWrapper from "../../components/PublicPageWrapper";
import {
  getUser,
  updateDisplayName,
  updateUser,
  useAuthDispatch,
  useAuthState,
} from "../../context";
import { formsErrorReducer } from "../../context/reducer";
import getFormFieldTypeByError from "../../utilities/getFormFieldTypeByError";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
import styles from "./Settings.module.css";
const { Item } = Form;

const initialStateError = {
  fieldName: "",
  wording: "",
  common: "",
};

const UpdateForm = ({ userData, action }) => {
  const userDetails = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const errorHandlerConfig = useErrorMessageConfig();
  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  const [shouldReset, setShouldReset] = useState(false);
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const initialInfo = {
    name: userData.name,
    display_name: userData.display_name,
    email: userData.email,
  };

  const handleSubmit = async (formValues) => {
    try {
      dispatchFormsErrors({ type: "RESET" });
      const submitValue = {};
      if (formValues.name !== initialInfo.name) {
        submitValue.name = formValues.name;
      }
      if (
        formValues.display_name &&
        formValues.display_name !== initialInfo.display_name
      ) {
        submitValue.display_name = formValues.display_name;
      }
      if (formValues.email && formValues.email !== initialInfo.email) {
        submitValue.email = formValues.email;
      }
      if (shouldReset) {
        submitValue.new_password = formValues.new_password;
        submitValue.current_password = formValues.current_password;
      }

      if (Object.keys(submitValue).length > 0) {
        await updateUser(userDetails, { ...submitValue });

        updateDisplayName(dispatch, submitValue.display_name);
      }
      action();
      form.resetFields();
      dispatchFormsErrors({ type: "RESET" });
    } catch (error) {
      let field = getFormFieldTypeByError(error);
      if (field === "notification") {
        return notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      } else if (field === "common") {
        dispatchFormsErrors({
          type: "SET_COMMON",
          payload: {
            common: handleErrorByCode(
              error.code ? error.code : error,
              errorHandlerConfig
            ),
          },
        });
      } else {
        dispatchFormsErrors({
          type: "SET_ERROR",
          payload: {
            fieldName: getFormFieldTypeByError(error),
            wording: handleErrorByCode(
              error.code ? error.code : error,
              errorHandlerConfig
            ),
          },
        });
      }
    }
  };

  return (
    <>
      {formsErrors.common ? (
        <Alert
          message={formsErrors.common}
          type="error"
          style={{ marginBottom: "24px" }}
        />
      ) : null}
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handleSubmit}
        onValuesChange={() => dispatchFormsErrors({ type: "RESET" })}
        className={styles.form}
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          ...initialInfo,
        }}
      >
        <Item
          className={styles.formItem}
          name="name"
          label={t("form.label.user.login")}
          {...(formsErrors.fieldName === "name" && {
            validateStatus: "error",
            help: formsErrors.wording,
          })}
        >
          <Input
            placeholder={t("form.placeholder.user.login")}
            prefix={<UserOutlined />}
            allowClear
          />
        </Item>
        <Item
          className={styles.formItem}
          label={t("form.label.user.display_name")}
          name="display_name"
        >
          <Input prefix={<UserOutlined />} allowClear />
        </Item>

        <Item
          className={styles.formItem}
          label={t("form.label.user.email")}
          name="email"
        >
          <Input
            placeholder={t("form.placeholder.user.email")}
            prefix={<UserOutlined />}
            allowClear
          />
        </Item>
        <Item
          label={t("form.button.user.toggle_password_reset")}
          name="switch"
          className="SwitchLeft"
        >
          <Switch
            checked={shouldReset}
            onChange={(state) => {
              state ? setShouldReset(true) : setShouldReset(false);
            }}
          />
        </Item>

        {shouldReset && (
          <>
            <Item
              label={t("form.label.user.current_password")}
              name="current_password"
              hasFeedback
              rules={[
                { required: true, message: t("form.hint.user.password") },
              ]}
              {...(formsErrors.fieldName === "password" && {
                validateStatus: "error",
                help: formsErrors.wording,
              })}
            >
              <Input.Password
                placeholder={t("form.placeholder.user.current_password")}
                prefix={<LockOutlined />}
                allowClear
              />
            </Item>
            <Item
              label={t("form.label.user.new_password_original")}
              name="new_password_original"
              rules={[
                { required: true, message: t("form.hint.user.password") },
              ]}
              dependencies={["current_password"]}
            >
              <Input.Password
                placeholder={t("form.placeholder.user.new_password_original")}
                prefix={<LockOutlined />}
                allowClear
              />
            </Item>
            <Item
              label={t("form.label.user.new_password_confirmation")}
              name="new_password"
              dependencies={["new_password_original"]}
              rules={[
                {
                  required: true,
                  message: t("form.hint.user.new_password_confirmation"),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      getFieldValue("new_password_original") === value
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(t("error.form_validation.passwords_mismatch"))
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder={t(
                  "form.placeholder.user.new_password_confirmation"
                )}
                prefix={<LockOutlined />}
                allowClear
              />
            </Item>
          </>
        )}
        <Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "var(--button-primary-background-color)",
            }}
          >
            {t("form.button.user.save_changes")}
          </Button>
        </Item>
        <Item>
          <Button
            type="link"
            onClick={history.goBack}
            style={{ color: "var(--button-default-path-color)" }}
          >
            {t("general.navigation_button.back_to_previous_page")}
          </Button>
        </Item>
      </Form>
    </>
  );
};

const Settings = () => {
  const [userData, setUserData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const errorHandlerConfig = useErrorMessageConfig();
  const { t } = useTranslation();

  const updateData = async () => {
    try {
      setIsFetching(true);
      let user = await getUser();
      setUserData(user);
      setIsFetching(false);
    } catch (error) {
      notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code),
        className: "Notifications",
      });
    }
  };

  useEffect(() => {
    const predefineUser = async () => {
      try {
        let user = await getUser();
        setUserData(user);
        setIsFetching(false);
      } catch (error) {
        notification.error({
          message: t("notification.message.error"),
          description: handleErrorByCode(error.code, errorHandlerConfig),
          className: "Notifications",
        });
      }
    };
    setIsFetching(true);
    predefineUser();
  }, []);

  return (
    <PublicPageWrapper>
      <Divider />
      <PageHeader
        title={
          <span style={{ font: "var( --font-30-38)" }}>
            {t("form.title.user_settings")}
          </span>
        }
      />

      {isFetching ? (
        <Skeleton />
      ) : (
        <>
          <UpdateForm action={updateData} userData={userData} />
        </>
      )}
    </PublicPageWrapper>
  );
};

export default Settings;
