import { Alert, Button, Form, Input, notification } from "antd";
import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { modifyFuzzer, useAuthState } from "../../context";
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

const ModifyFuzzer = ({ action, fuzzer }) => {
  const userDetails = useAuthState();
  const [form] = Form.useForm();
  const errorHandlerConfig = useErrorMessageConfig();
  const [formsErrors, dispatchFormsErrors] = useReducer(
    formsErrorReducer,
    initialStateError
  );
  const initialFuzzer = { name: fuzzer.name, description: fuzzer.description };
  const { t } = useTranslation();
  const handleSubmit = async (formValues) => {
    try {
      dispatchFormsErrors({ type: "RESET" });
      const submitValue = {};
      if (formValues.name !== initialFuzzer.name) {
        submitValue.name = formValues.name;
      }
      if (formValues.description !== initialFuzzer.description) {
        submitValue.description =
          !formValues.description === true ? "" : formValues.description;
      }
      if (Object.keys(submitValue).length > 0) {
        await modifyFuzzer(userDetails, fuzzer.id, { ...submitValue });
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
        name="basic"
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        onValuesChange={() => dispatchFormsErrors({ type: "RESET" })}
        initialValues={{ name: fuzzer.name, description: fuzzer.description }}
      >
        <Item
          label={t("form.label.fuzzer.name")}
          name="name"
          rules={[{ required: true, message: t("form.hint.fuzzer.name") }]}
          {...(formsErrors.fieldName === "name" && {
            validateStatus: "error",
            help: formsErrors.wording,
          })}
        >
          <Input placeholder={t("form.placeholder.fuzzer.name")} />
        </Item>
        <Item
          label={t("form.label.fuzzer.description")}
          name="description"
          rules={[{ max: 159, message: t("form.hint.fuzzer.description") }]}
        >
          <Input.TextArea
            rows={4}
            placeholder={t("form.placeholder.fuzzer.description")}
            maxLength={160}
          />
        </Item>

        <Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "var(--button-primary-background-color)",
            }}
          >
            {t("form.button.fuzzer.save_changes")}
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default ModifyFuzzer;
