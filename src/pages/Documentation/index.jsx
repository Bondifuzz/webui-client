import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../containers/Navbar";
import styles from "./Documentation.module.css";

const Documentation = () => {
  const { i18n } = useTranslation();

  return (
    <Layout>
      <Navbar />
      <Layout className="PageLayout">
        <Content className="PageContent">
          <iframe
            id="docs"
            title="Documentation"
            src={`book/${i18n.language.slice(0, 2)}/index.html`}
            //src={`${process.env.REACT_APP_SERVER_URL}/en/`}
            className={styles.iframeContent}
          ></iframe>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Documentation;
