import { Badge, Tag } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomIcon from "../../components/UI/CustomIcon";

import { ReactComponent as CheckCircleOutlined } from "../../assets/icons/CheckCircleOutlined.svg";
import { ReactComponent as CancelOutlined } from "../../assets/icons/CancelOutlined.svg";
import { ReactComponent as SyncOutlined } from "../../assets/icons/SyncOutlined.svg";
import { ReactComponent as StopOutlined } from "../../assets/icons/StopOutlined.svg";

const ColoredTag = ({ type, item }) => {
  const { t } = useTranslation();
  let { health, status } = item;
  let interrupted;

  if (type === "status") {
    let statusIcon;
    let statusColor;

    switch (status) {
      case "Verifying":
        statusColor = "purple";
        statusIcon = <CustomIcon component={SyncOutlined} />;
        break;
      case "Running":
        statusColor = "green";
        statusIcon = <CustomIcon component={CheckCircleOutlined} />;
        break;
      case "Stopped":
        statusColor = health === "Error" ? "red" : "gold";
        statusIcon =
          health === "Error" ? (
            <CustomIcon component={CancelOutlined} />
          ) : (
            <CustomIcon component={StopOutlined} />
          );
        interrupted = health === "Error" ? "Interrupted" : false;
        break;
      default:
        statusColor = "default";
        statusIcon = <Badge className="statusDot" status="default" />;
    }
    return (
      <Tag color={statusColor} icon={statusIcon}>
        {t(`fuzzers.versions_tab.status.${interrupted ? interrupted : status}`)}
      </Tag>
    );
  } else if (type === "state") {
    let stateColor;
    switch (health) {
      case "Ok":
        stateColor = "green";
        break;
      case "Warning":
        stateColor = "gold";
        break;
      case "Error":
        stateColor = "red";
        break;
      default:
        stateColor = "default";
    }

    return (
      <Tag color={stateColor}>{t("fuzzers.versions_tab.state." + health)}</Tag>
    );
  }
};

export default ColoredTag;
