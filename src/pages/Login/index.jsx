import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Divider, Form, Input, PageHeader } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PublicPageWrapper from "../../components/PublicPageWrapper";
import { loginUser, useAuthDispatch } from "../../context";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
import styles from "./Login.module.css";
const { Item } = Form;

const initialData = {
  login: "",
  password: "",
  isSubmitting: false,
  errorMessage: null,
};

const Login = (props) => {
  const [data, setData] = useState(initialData);
  const dispatch = useAuthDispatch();
  const { t } = useTranslation();
  const errorHandlerConfig = useErrorMessageConfig();
  const handleLogin = async () => {
    setData({ ...data, isSubmitting: true, errorMessage: null });
    try {
      await loginUser(dispatch, {
        username: data.login,
        password: data.password,
        session_metadata: "string",
      });
    } catch (error) {
      setData({
        ...data,
        errorMessage: handleErrorByCode(error.code, errorHandlerConfig),
      });
    }
  };

  const handleInput = (values) => {
    setData({ ...data, ...values });
  };

  return (
    <PublicPageWrapper>
      <Divider />
      <PageHeader
        title={
          <span style={{ font: "var( --font-30-38)" }}>
            {t("form.title.log_in")}
          </span>
        }
      />
      {data.errorMessage ? (
        <Alert
          message={data.errorMessage}
          type="error"
          className={styles.form}
          style={{ width: "330px", marginBottom: "24px" }}
        />
      ) : null}
      <Form
        layout="vertical"
        requiredMark="optional"
        onFinish={handleLogin}
        onValuesChange={handleInput}
        className={styles.form}
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
      >
        <Item
          className={styles.formItem}
          label={t("form.label.auth.login")}
          name="login"
          hasFeedback
          rules={[{ required: true, message: t("form.hint.auth.login") }]}
          //validateStatus - if null- no valdating since errormessage was not yet requested;
          //if not null- means it contains errorMessage, so error is called
          validateStatus={
            data.errorMessage === null
              ? undefined
              : data.errorMessage
              ? "error"
              : "success"
          }
        >
          <Input
            disabled={data.isSubmitting}
            placeholder={t("form.placeholder.auth.login")}
            prefix={<UserOutlined />}
            allowClear
          />
        </Item>

        <Item
          label={t("form.label.auth.password")}
          name="password"
          hasFeedback
          rules={[{ required: true, message: t("form.hint.auth.password") }]}
          validateStatus={
            data.errorMessage === null
              ? undefined
              : data.errorMessage
              ? "error"
              : "success"
          }
        >
          <Input.Password
            disabled={data.isSubmitting}
            placeholder={t("form.placeholder.auth.password")}
            prefix={<LockOutlined />}
            allowClear
          />
        </Item>
        <Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            disabled={data.isSubmitting}
            style={{
              backgroundColor: "var(--button-primary-background-color)",
            }}
          >
            {t("form.button.auth.log_in")}
          </Button>
        </Item>
        <Item hidden={true}>
          <Link to="/registration">
            {t("general.navigation_button.registration")}
          </Link>
        </Item>
      </Form>
    </PublicPageWrapper>
  );
};

export default Login;
