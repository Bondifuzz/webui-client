import { Button, Form, Input, InputNumber, notification, Tooltip } from "antd";
import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import SlidersDependentPredefined from "../../components/UI/SliderInput/SlidersDependentPredefined";
import { projectCreationNotAllowed } from "../../config/constants";
import { createProject, useAuthState } from "../../context";
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

const CreateProject = ({ action }) => {
  const userDetails = useAuthState();
  const [form] = Form.useForm();
  const [inputValueCPU, setInputValueCPU] = useState(2);
  const [inputValueRAM, setInputValueRAM] = useState(2);
  const errorHandlerConfig = useErrorMessageConfig();
  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  const unitMultiplier = 1;
  const { t } = useTranslation();

  const setCPU = (e) => {
    setInputValueCPU(e);
  };
  const setRAM = (e) => {
    setInputValueRAM(e);
  };

  const handleSubmit = async (formValues) => {
    try {
      dispatchFormsErrors({ type: "RESET" });
      const projectPropsForm = (({ name_project, description }) => ({
        name_project,
        description,
      }))(formValues);
      const projectProps = {
        name: projectPropsForm.name_project,
        description:
          !projectPropsForm.description === true
            ? ""
            : projectPropsForm.description,
        pool: {
          //node_count: 1,
          node_cpu: Number(inputValueCPU) * unitMultiplier,
          node_ram: Number(inputValueRAM) * unitMultiplier,
        },
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
      <Item label={"Nodes"} required>
        <InputNumber
          name="node_count"
          readOnly={true}
          style={{
            width: "110px",
          }}
          value={1}
        />
      </Item>
      <SlidersDependentPredefined setCPU={setCPU} setRAM={setRAM} />
      <Tooltip title={t("form.hint.project.creation_disabled")}>
        <Button
          disabled={projectCreationNotAllowed}
          block
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "var(--button-primary-background-color)" }}
        >
          {t("form.button.project.project_create")}
        </Button>
      </Tooltip>
    </Form>
  );
};

export default CreateProject;
