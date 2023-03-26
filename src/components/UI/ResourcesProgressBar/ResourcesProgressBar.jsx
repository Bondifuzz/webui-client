import { Progress } from "antd";
import Icon from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as MemoryOutlined } from "../../../assets/icons/MemoryOutlined.svg";
import { ReactComponent as SpeedOutlined } from "../../../assets/icons/SpeedOutlined.svg";

import styles from "./ResourcesProgressBar.module.css";

const ResourcesProgressBar = ({
  type,
  value,
  total = 100,
  size = "full",
  disabled = false,
}) => {
  const { t } = useTranslation();
  const width = size === "full" ? "146px" : "116px";

  const percent = Math.round((value * 100) / total);
  return (
    <div className={styles.resources}>
      {size === "full" && (
        <Icon
          className="CustomIcon"
          component={type === "cpu" ? MemoryOutlined : SpeedOutlined}
          style={{ color: "var(--link-active-grey)" }}
        />
      )}
      {size === "full" && (
        <div style={{ paddingRight: "5px", paddingLeft: "5px" }}>
          {t(`projects.column_title.${type}`)}
        </div>
      )}
      <Progress
        percent={percent}
        format={(percent) =>
          `${Math.round(value / 100)}/${Math.round(total / 100)}`
        }
        strokeColor={
          disabled
            ? "var(--link-pale-grey)"
            : type === "cpu"
            ? "var(--progress-purple)"
            : "var(--progress-green)"
        }
        style={{ width: width }}
      />
    </div>
  );
};

export default ResourcesProgressBar;
