import { Modal } from "antd";
import { t } from "i18next";
import DeleteOrErase from "../DeleteOrErase/DeleteOrErase";

export default function modalDelete(actionDelete, actionErase, version) {
  Modal.warning({
    title: (
      <p style={{ fontWeight: "600" }}>{t("modal.title.choose_one_option")}</p>
    ),
    content: (
      <DeleteOrErase
        actionDelete={actionDelete}
        actionErase={actionErase}
        version={version}
      />
    ),
    maskClosable: true,
    closable: true,
    centered: true,
    okText: t("modal.button.cancel"),
  });
}
