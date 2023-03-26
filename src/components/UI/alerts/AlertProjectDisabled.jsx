import { Alert } from "antd";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as MosquitoSmall } from "../../../assets/images/MosquitoSmall.svg";
import { supportEmail } from "../../../config/constants";

const AlertProjectDisabled = () => {
  const { t } = useTranslation();

  return (
    !localStorage.getItem("upgradeAlertShown") && (
      <Alert
        type="error"
        message={
          <div style={{ display: "flex" }}>
            <Trans i18nKey="general.alert.project_creation_disabled">
              Upgrade your account to unlock new features. Please contact
              support at
              <div
                className="divLink"
                onClick={() => (window.location = `mailto:${supportEmail}`)}
              >
                {{ supportEmail }}
              </div>
              for details.
            </Trans>
          </div>
        }
        className="alertMessageDisableProject"
        closable
        banner
        //showIcon={false}
        onClose={() => {
          localStorage.setItem("upgradeAlertShown", true);
        }}
        icon={<MosquitoSmall />}
      />
    )
  );
};

export default AlertProjectDisabled;
