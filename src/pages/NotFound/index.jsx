import { Button, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../containers/Navbar";
import { ReactComponent as BondiLensColor } from "../../assets/images/BondiLensColor.svg";

import styles from "./Notfound.module.css";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Layout>
      <Navbar />
      <Layout className="PageLayout">
        <Content className="PageContent" style={{ backgroundColor: "white" }}>
          <div className={styles.ContentHeader}>
            <Title style={{ font: "var(--font-30-38)" }}>
              {t("not_found.title.page_not_found")}
            </Title>
            <div>
              <BondiLensColor />
            </div>
            <Button
              onClick={() => {
                history.push("/");
              }}
              type="primary"
            >
              {t("general.navigation_button.go_to_main_page")}
            </Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NotFound;
