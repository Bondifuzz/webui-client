import {
  Button,
  Form,
  Input,
  InputNumber,
  notification,
  Tabs,
  Tooltip,
} from "antd";
import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import SlidersDependentPredefined from "../../components/UI/SliderInput/SlidersDependentPredefined";
import { modifyProject, modifyProjectPool, useAuthState } from "../../context";
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

const ModifyProject = ({ userProject, action }) => {
  let { name, description, pool, id } = userProject;
  const unitMultiplier = 1;
  const [form] = Form.useForm();
  const userDetails = useAuthState();
  const errorHandlerConfig = useErrorMessageConfig();
  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  const [inputValueCPU, setInputValueCPU] = useState(
    Number(pool.node_group.node_cpu) / unitMultiplier
  );
  const [inputValueRAM, setInputValueRAM] = useState(
    Number(pool.node_group.node_ram) / unitMultiplier
  );
  const submitProject = {};

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

      if (projectPropsForm.name_project !== name) {
        submitProject.name = projectPropsForm.name_project;
      }

      if (projectPropsForm.description !== description) {
        submitProject.description =
          !projectPropsForm.description === true
            ? ""
            : projectPropsForm.description;
      }
      if (Object.keys(submitProject).length > 0) {
        await modifyProject(userDetails, id, submitProject);
      }

      if (
        Number(inputValueCPU) * unitMultiplier !==
          Number(pool.node_group.node_cpu) ||
        Number(inputValueRAM) * unitMultiplier !==
          Number(pool.node_group.node_ram)
      ) {
        await modifyProjectPool(userDetails, id, {
          node_cpu: Number(inputValueCPU) * unitMultiplier,
          node_ram: Number(inputValueRAM) * unitMultiplier,
        });
      }

      await action();
      form.resetFields();
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
        name_project: name,
        description: description,
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
      <SlidersDependentPredefined
        setCPU={setCPU}
        setRAM={setRAM}
        previousValueCPU={Number(pool.node_group.node_cpu) / unitMultiplier}
        previousValueRAM={Number(pool.node_group.node_ram) / unitMultiplier}
      />
      <Tooltip title={t("form.hint.project.creation_disabled")}>
        <Button
          block
          // disabled
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "var(--button-primary-background-color)" }}
        >
          {t("form.button.project.save_changes")}
        </Button>
      </Tooltip>
    </Form>
  );
};

export default ModifyProject;
