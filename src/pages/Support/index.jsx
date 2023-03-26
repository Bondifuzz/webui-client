import { Button, Collapse, Input, Layout, Select, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import faq_en from "../../assets/faq/faq_en.json";
import faq_ru from "../../assets/faq/faq_ru.json";
import { supportEmail } from "../../config/constants";
import Navbar from "../../containers/Navbar";
import styles from "./Support.module.css";

const indentBase = 22;

function convertContent(item, indent, result) {
  if (!Array.isArray(item)) {
    result.push({ line: item, indent: indent });
    return result;
  }
  return item.forEach((line) =>
    convertContent(line, indent + indentBase, result)
  );
}

const Support = () => {
  const [mode, setMode] = useState("Faq");
  const { t, i18n } = useTranslation();
  let FAQcontent = i18n.resolvedLanguage === "en" ? faq_en : faq_ru;
  const Faq = () => {
    return (
      <div className={styles.ContentContainer}>
        <div className={styles.ContentHeader}>
          <Title style={{ font: "var(--font-24-32)" }}>FAQ</Title>
          <Button
            type="primary"
            //onClick={() => setMode("Ask")}
            onClick={() => (window.location = `mailto:${supportEmail}`)}
          >
            {t("support.button.ask_or_report")}
          </Button>
        </div>
        <Collapse
          bordered={false}
          style={{
            maxHeight: "630px",
            marginTop: "34px",
            textAlign: "left",
            backgroundColor: "white",
          }}
          accordion
        >
          {FAQcontent.map((post, index) => {
            let result = [];
            convertContent(post.body, 0, result);
            return (
              <Collapse.Panel
                header={
                  <Typography style={{ font: "500 var(--font-14-22)" }}>
                    {post.header}
                  </Typography>
                }
                key={index}
              >
                {result.map((item, itemIndex) =>
                  item.indent === indentBase ? (
                    <div
                      style={{
                        paddingLeft: item.indent,
                        paddingRight: indentBase,
                      }}
                      key={itemIndex}
                    >
                      {item.line}
                    </div>
                  ) : (
                    <div
                      style={{
                        paddingLeft: item.indent,
                        paddingRight: indentBase,
                      }}
                      key={itemIndex}
                    >
                      {item.indent === indentBase * 2 ? (
                        <div
                          style={{
                            display: "inline",
                            color: "var(--button-primary-background-color)",
                          }}
                        >
                          &bull;
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "inline",
                            color: "#FADB14",
                          }}
                        >
                          &#124;
                        </div>
                      )}
                      &nbsp; {item.line}
                    </div>
                  )
                )}
              </Collapse.Panel>
            );
          })}
        </Collapse>
      </div>
    );
  };

  const Ask = () => {
    return (
      <>
        <div className={styles.ContentContainer}>
          <Button
            type="link"
            className="PrimaryLink"
            onClick={() => setMode("Faq")}
            style={{
              paddingLeft: "0",
            }}
          >
            {t("general.navigation_button.back_to_support")}
          </Button>
          <div className={styles.ContentHeader}>
            <Title style={{ font: "var(--font-24-32)" }}>
              {t("support.title.ask_or_report")}
            </Title>
            <Select
              style={{ width: 250 }}
              placeholder={t("support.placeholder.request_type_select")}
            >
              <Select.Option value="request">
                {t("support.request_type.request")}
              </Select.Option>
              <Select.Option value="question">
                {t("support.request_type.question")}
              </Select.Option>
              <Select.Option value="problem">
                {t("support.request_type.problem")}
              </Select.Option>
            </Select>
          </div>
          <Input.TextArea
            placeholder={t("support.placeholder.message_text")}
            rows={8}
          ></Input.TextArea>
          <Button
            style={{
              marginTop: "34px",
              width: "245px",
            }}
            type="primary"
            onClick={() => setMode("Apply")}
          >
            {t("support.button.send")}
          </Button>
        </div>
      </>
    );
  };

  const Apply = () => {
    return (
      <div className={styles.ContentContainerApply}>
        <Title style={{ font: "var(--font-24-32)" }}>
          {t("support.response_message.gratitude")}
        </Title>
        <Typography style={{ font: "var(--font-16-24)" }}>
          {t("support.response_message.promise_to_reply")}
        </Typography>
        <Button
          style={{
            backgroundColor: "var(--button-primary-background-color)",
            marginTop: "34px",
            width: "245px",
          }}
          type="primary"
          onClick={() => setMode("Ask")}
        >
          {t("support.button.ask_again")}
        </Button>
        <Button
          type="link"
          onClick={() => setMode("Faq")}
          style={{
            display: "block",
            margin: "20px auto 0",
          }}
        >
          {t("general.navigation_button.back_to_support")}
        </Button>
      </div>
    );
  };

  const modeSelection = () => {
    switch (mode) {
      case "Faq":
        return <Faq />;
      case "Ask":
        return <Ask />;
      case "Apply":
        return <Apply />;
      default:
        return <Faq />;
    }
  };
  return (
    <Layout>
      <Navbar />
      <Layout className="PageLayout">
        <Content className="PageContent">{modeSelection()}</Content>
      </Layout>
    </Layout>
  );
};

export default Support;
