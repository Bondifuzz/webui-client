import { Button, Col, Form, Input, notification, Select, Tooltip } from "antd";
import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createProject, useAuthState, useFuzzers } from "../../context";
import { formsErrorReducer } from "../../context/reducer";
import getFormFieldTypeByError from "../../utilities/getFormFieldTypeByError";
import handleErrorByCode from "../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../utilities/useErrorMessageConfig";
import { projectCreationNotAllowed } from "../../config/constants";
const { Item } = Form;

const initialStateError = {
  fieldName: "",
  wording: "",
  common: "",
};

const CreateProjectDemo = ({ action }) => {
  const userDetails = useAuthState();
  const [form] = Form.useForm();
  const { fuzzersFetched } = useFuzzers();
  const { pools } = fuzzersFetched;
  const errorHandlerConfig = useErrorMessageConfig();
  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  const { t } = useTranslation();

  //   async function getAvailablePools() {
  //     try {
  //       let response = await fetchPools(userDetails, fuzzer.engine);
  //       setImagesList(response);
  //     } catch (error) {
  //       return notification.error({
  //         message: t("notification.message.error"),
  //         description: handleErrorByCode(error.code, errorHandlerConfig),
  //         className: "Notifications",
  //       });
  //     }
  //   }
  const handleSubmit = async (formValues) => {
    try {
      dispatchFormsErrors({ type: "RESET" });
      const projectPropsForm = (({ name_project, description, pool_id }) => ({
        name_project,
        description,
        pool_id,
      }))(formValues);
      const projectProps = {
        name: projectPropsForm.name_project,
        description:
          !projectPropsForm.description === true
            ? ""
            : projectPropsForm.description,
        pool_id: projectPropsForm.pool_id,
      };

      await createProject(userDetails, projectProps);
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
      onValuesChange={() => dispatchFormsErrors({ type: "RESET" })}
    >
      <Item
        label={t("form.label.project.name")}
        name="name_project"
        rules={[{ required: true, message: t("form.hint.project.name") }]}
        {...(formsErrors.fieldName === "name" && {
          validateStatus: "error",
          help: formsErrors.wording,
        })}
      >
        <Input placeholder={t("form.placeholder.project.name")} />
      </Item>
      <Item
        label={t("form.label.project.description")}
        name="description"
        rules={[{ max: 159, message: t("form.hint.project.description") }]}
      >
        <Input.TextArea
          rows={4}
          placeholder={t("form.placeholder.project.description")}
          maxLength={160}
        />
      </Item>
      <Col span={12}>
        <Item
          label={t("form.label.project.pool")}
          name="pool_id"
          rules={[{ required: true, message: t("form.hint.project.pool") }]}
          {...(formsErrors.fieldName === "pool" && {
            validateStatus: "error",
            help: formsErrors.wording,
          })}
        >
          <Select>
            {pools.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Item>
      </Col>

      {/* if projectCreationNotAllowed===true to be shown
       <Tooltip title={t("form.hint.project.creation_disabled")}> */}
      <Button
        disabled={projectCreationNotAllowed}
        block
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "var(--button-primary-background-color)" }}
      >
        {t("form.button.project.project_create")}
      </Button>
      {/* </Tooltip> */}
    </Form>
  );
};

export default CreateProjectDemo;
