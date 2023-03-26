import { Button, Col, Form, Input, notification, Row, Select } from "antd";
import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  modifyIntegration,
  modifyIntegrationConfig,
  useAuthState,
} from "../../context";
import { formsErrorReducer } from "../../context/reducer";
import getFormFieldTypeByError from "../../utilities/getFormFieldTypeByError";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
const { Item } = Form;

const initialStateError = {
  fieldName: "",
  wording: "",
  common: "",
};

const ModifyIntegration = ({ integration, action, config }) => {
  const [form] = Form.useForm();
  const [isConfigChanged, setIsConfigChanged] = useState(false);
  const userDetails = useAuthState();
  const errorHandlerConfig = useErrorMessageConfig();

  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  let submitIntegration = {};
  let submitConfig = {};
  const { t } = useTranslation();

  let configUpdate = () => {
    dispatchFormsErrors({ type: "RESET" });
    setIsConfigChanged(
      form.isFieldsTouched([
        "project",
        "url",
        "username",
        "password",
        "priority",
        "issue_type",
        "token",
      ])
    );
  };
  const handleSubmit = async (formValues) => {
    try {
      dispatchFormsErrors({ type: "RESET" });
      const integrationPropsForm = (({ type, name }) => ({
        type,
        name,
      }))(formValues);

      const configPropsForm = (({
        project,
        url,
        username,
        password,
        priority,
        issue_type,
        token,
      }) => ({
        project,
        url,
        username,
        password,
        priority,
        issue_type,
        token,
      }))(formValues);

      if (integrationPropsForm.name !== integration.name) {
        submitIntegration.name = integrationPropsForm.name;
      }

      submitConfig = {
        type: integrationPropsForm.type,
        config: {
          ...configPropsForm,
          priority: configPropsForm.priority ? configPropsForm.priority : null,
        },
      };

      if (Object.keys(submitIntegration).length > 0) {
        await modifyIntegration(
          userDetails,
          userDetails.userProjectId,
          integration.id,
          submitIntegration
        );
      }
      if (isConfigChanged) {
        await modifyIntegrationConfig(
          userDetails,
          userDetails.userProjectId,
          integration.id,
          submitConfig
        );
      }
      await action();
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
    <Form
      form={form}
      name="basic"
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark="optional"
      onValuesChange={configUpdate}
      style={{
        paddingTop: "24px",
        overflow: "auto",
        overflowX: "hidden",
        paddingRight: "20px",
      }}
      initialValues={{
        type: integration.type,
        name: integration.name,
        ...config,
      }}
    >
      <Row gutter={8}>
        <Col span={12}>
          <Item label={t("form.label.integration.type")} name="type" required>
            <Select disabled></Select>
          </Item>
        </Col>
      </Row>
      <Item
        label={t("form.label.integration.name")}
        name="name"
        rules={[{ required: true, message: t("form.hint.integration.name") }]}
        {...(formsErrors.fieldName === "name" && {
          validateStatus: "error",
          help: formsErrors.wording,
        })}
      >
        <Input />
      </Item>

      <Item
        label={t("form.label.integration.project_name")}
        name="project"
        rules={[
          { required: true, message: t("form.hint.integration.project_name") },
        ]}
      >
        <Input />
      </Item>
      <Item
        label={t("form.label.integration.url")}
        name="url"
        rules={[{ required: true, message: t("form.hint.integration.url") }]}
      >
        <Input type="url" placeholder={t("form.placeholder.integration.url")} />
      </Item>
      {integration.type === "Jira" && (
        <Row gutter={12}>
          <Col span={12}>
            <Item
              label={t("form.label.integration.sign_in_bug_tracker")}
              name="username"
              rules={[
                {
                  required: true,
                  message: t("form.hint.integration.username"),
                },
              ]}
            >
              <Input placeholder={t("form.placeholder.integration.username")} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              label=" "
              name="password"
              rules={[
                {
                  required: true,
                  message: t("form.hint.integration.password"),
                },
              ]}
            >
              <Input.Password
                placeholder={t("form.placeholder.integration.password")}
              />
            </Item>
          </Col>
        </Row>
      )}
      {integration.type === "Jira" && (
        <Row gutter={12}>
          <Col span={12}>
            <Item
              label={t("form.label.integration.issue_type")}
              name="issue_type"
              rules={[
                {
                  required: true,
                  message: t("form.hint.integration.issue_type"),
                },
              ]}
            >
              <Input
                placeholder={t("form.placeholder.integration.issue_type")}
              />
            </Item>
          </Col>
          <Col span={12}>
            <Item label={t("form.label.integration.priority")} name="priority">
              <Input placeholder={t("form.placeholder.integration.priority")} />
            </Item>
          </Col>
        </Row>
      )}
      {integration.type === "Youtrack" && (
        <Item
          label={t("form.label.integration.sign_in_bug_tracker")}
          name="token"
          rules={[
            {
              required: true,
              message: t("form.hint.integration.token"),
            },
          ]}
        >
          <Input placeholder={t("form.placeholder.integration.token")} />
        </Item>
      )}

      <Button
        block
        type="primary"
        htmlType="submit"
        style={{
          backgroundColor: "var(--button-primary-background-color)",
        }}
      >
        {t("form.button.integration.save_changes")}
      </Button>
    </Form>
  );
};

export default ModifyIntegration;
