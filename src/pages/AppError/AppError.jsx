import { Button, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { ReactComponent as BondiLensColor } from "../../assets/images/BondiLensColor.svg";
import Navbar from "../../containers/Navbar";

const AppError = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const handleReset = async () => {
    history.push(history.location.pathname);
    resetErrorBoundary();
  };
  return (
    <Layout>
      <Navbar />
      <Layout className="PageLayout">
        <Content className="PageContent" style={{ backgroundColor: "white" }}>
          <div style={{ marginTop: "307px" }}>
            <Title style={{ font: "var(--font-30-38)" }}>
              {t("app_error.title.error")}
            </Title>
            <div>
              <BondiLensColor />
            </div>
            <Button onClick={handleReset} type="primary">
              {t("app_error.button.refresh_page")}
            </Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppError;
