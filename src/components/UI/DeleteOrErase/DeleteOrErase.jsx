import { Button, Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const DeleteOrErase = ({ actionDelete, actionErase, version }) => {
  const { t } = useTranslation();
  return (
    <div style={{ display: "flex" }}>
      <Button
        onClick={() => {
          actionDelete(version);
          Modal.destroyAll();
        }}
        className="SimpleButton"
        style={{ marginRight: "8px" }}
      >
        {t("modal.button.move_to_trash")}
      </Button>
      <Button onClick={() => actionErase(version)} className="SimpleButton">
        {t("modal.button.delete_permanently")}
      </Button>
    </div>
  );
};

export default DeleteOrErase;
