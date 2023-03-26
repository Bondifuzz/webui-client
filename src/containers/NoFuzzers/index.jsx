import { Button, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BondiFamilyPcColor } from "../../assets/images/BondiFamilyPcColor.svg";
import styles from "./NoFuzzers.module.css";

const NoFuzzers = ({ onClick, children }) => {
  const { t } = useTranslation();
  return (
    <Content className={styles.pageContainer}>
      <div className={styles.image}>
        <BondiFamilyPcColor />
      </div>
      <div className={styles.description}>
        <Typography.Text className={styles.title}>
          {t("fuzzers.data_availability_message.no_fuzzers_yet")}
        </Typography.Text>
        <Button className={styles.button} onClick={onClick} type="primary">
          {t("fuzzers.button.fuzzer_create")}
        </Button>
      </div>

      {children}
    </Content>
  );
};

export default NoFuzzers;
