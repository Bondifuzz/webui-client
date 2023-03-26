import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BondiFamilyLaptopBW } from "../../assets/images/BondiFamilyLaptopBW.svg";

const NoItems = ({ type, action }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        margin: "70px auto",
        backgroundColor: "transparent",
      }}
    >
      <Title
        style={{
          font: "var(--font-24-32)",
          color: "var(--link-active-grey)",
          fontWeight: "400",
        }}
      >
        {t(`fuzzers.${type}_tab.data_availability_message.no_${type}_yet`)}
      </Title>
      <div>
        <BondiFamilyLaptopBW />
      </div>
      <Button type="primary" style={{ marginTop: "30px" }} onClick={action}>
        {t("fuzzers.button.add_version")}
      </Button>
    </div>
  );
};

export default NoItems;
