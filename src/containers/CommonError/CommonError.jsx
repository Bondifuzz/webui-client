import { Button } from "antd";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { supportEmail } from "../../config/constants";

import Title from "antd/lib/typography/Title";
import { ReactComponent as BugCycleCrash } from "../../assets/images/BugCycleCrash.svg";

const CommonError = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        margin: "70px auto",
        backgroundColor: "transparent",
      }}
    >
      <div>
        <BugCycleCrash />
      </div>
      <Title style={{ font: "var(--font-24-32)", fontWeight: "400" }}>
        {t("fuzzers.tab_error.title")}
      </Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Trans i18nKey="fuzzers.tab_error.contact_support">
          Please contact support at
          <Button
            type="link"
            className="PrimaryLink"
            style={{ paddingLeft: "5px" }}
            onClick={() => (window.location = `mailto:${supportEmail}`)}
          >
            {{ supportEmail }}
          </Button>
        </Trans>
      </div>
    </div>
  );
};

export default CommonError;
