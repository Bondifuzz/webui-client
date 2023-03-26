import { Button, Col, Form, Input, notification, Row, Select } from "antd";
import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { createIntegration, useAuthState } from "../../context";
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

const CreateIntegration = ({ action }) => {
  const userDetails = useAuthState();
  const [form] = Form.useForm();
  const [integrationType, setIntegrationType] = useState("jira");
  const errorHandlerConfig = useErrorMessageConfig();
  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  const { t } = useTranslation();
  const handleIntegration = (type) => {
    setIntegrationType(type);
  };

  const handleSubmit = async (formValues) => {
    try {
      dispatchFormsErrors({ type: "RESET" });

      const integrationPropsForm = (({ type, name }) => ({
        type,
        name,
      }))(formValues);
      const integrationConfigPropsForm = (({
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

      const integrationProps = {
        ...integrationPropsForm,
        config: {
          ...integrationConfigPropsForm,
          priority: integrationConfigPropsForm.priority
            ? integrationConfigPropsForm.priority
            : null,
        },
      };

      await createIntegration(
        userDetails,
        userDetails.userProjectId,
        integrationProps
      );

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
      style={{
        overflow: "auto",
        overflowX: "hidden",
        paddingRight: "20px",
      }}
      initialValues={{
        type: integrationType,
        name: "Default_integration",
        issue_type: "Task",
      }}
      onValuesChange={() => dispatchFormsErrors({ type: "RESET" })}
    >
      <Col span={12}>
        <Item label={t("form.label.integration.type")} name="type" required>
          <Select onSelect={handleIntegration}>
            <Select.Option value="jira">
              {t("form.button.integration.select_type.jira")}
            </Select.Option>
            <Select.Option value="youtrack">
              {t("form.button.integration.select_type.youtrack")}
            </Select.Option>
          </Select>
        </Item>
      </Col>
      {integrationType === "jira" && (
        <>
          <Item
            label={t("form.label.integration.name")}
            name="name"
            rules={[
              { required: true, message: t("form.hint.integration.name") },
            ]}
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
              {
                required: true,
                message: t("form.hint.integration.project_name"),
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            label={t("form.label.integration.url")}
            name="url"
            rules={[
              { required: true, message: t("form.hint.integration.url") },
            ]}
          >
            <Input
              type="url"
              placeholder={t("form.placeholder.integration.url")}
              name="url"
            />
          </Item>
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
                <Input
                  placeholder={t("form.placeholder.integration.username")}
                />
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
                <Input
                  placeholder={t("form.placeholder.integration.password")}
                />
              </Item>
            </Col>
          </Row>
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
              <Item
                label={t("form.label.integration.priority")}
                name="priority"
              >
                <Input
                  placeholder={t("form.placeholder.integration.priority")}
                />
              </Item>
            </Col>
          </Row>
        </>
      )}
      {integrationType === "youtrack" && (
        <>
          <Item
            label={t("form.label.integration.name")}
            name="name"
            rules={[
              { required: true, message: t("form.hint.integration.name") },
            ]}
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
              {
                required: true,
                message: t("form.hint.integration.project_name"),
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            label={t("form.label.integration.url")}
            name="url"
            rules={[
              { required: true, message: t("form.hint.integration.url") },
            ]}
          >
            <Input
              type="url"
              placeholder={t("form.placeholder.integration.url")}
              name="url"
            />
          </Item>

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
        </>
      )}

      <Button
        block
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "var(--button-primary-background-color)" }}
      >
        {t("form.button.integration.integration_create")}
      </Button>
    </Form>
  );
};

export default CreateIntegration;
