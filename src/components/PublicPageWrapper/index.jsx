import { Layout, PageHeader } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { ReactComponent as BondiFamilyPcColor } from "../../assets/images/BondiFamilyPcColor.svg";
import { ReactComponent as LogoBlack } from "../../assets/images/LogoBlack.svg";
import styles from "./PublicPageWrapper.module.css";

const BackPublicPage = () => {
  return (
    <>
      <PageHeader
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LogoBlack
              style={{ height: "var(--logo-height)", width: "auto" }}
            />
          </div>
        }
      />
      <div className={styles.image}>
        <BondiFamilyPcColor
          style={{
            display: "block",
            marginTop: "200px",
          }}
        />
      </div>
      <div className={styles.bg} />
    </>
  );
};

const PublicPageWrapper = ({ children }) => {
  return (
    <Layout className={styles.containerPage}>
      <Content className={styles.containerBack}>
        <BackPublicPage />
      </Content>
      <Layout.Sider className={styles.containerForm} width="32vw">
        {children}
      </Layout.Sider>
    </Layout>
  );
};

export default PublicPageWrapper;
