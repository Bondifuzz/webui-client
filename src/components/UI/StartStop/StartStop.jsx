import { Button, Tooltip } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as StartOutlined } from "../../../assets/icons/StartOutlined.svg";
import { ReactComponent as StopOutlined } from "../../../assets/icons/StopOutlined.svg";
import getActionConditions from "../../../utilities/getActionConditions";
import CustomIcon from "../CustomIcon";

const StartStop = ({ item, handleStop, handleStart }) => {
  const { t } = useTranslation();
  let { startDisabled, startDisabledTooltip } = getActionConditions(item);
  if (item.status === "Running" || item.status === "Verifying") {
    return (
      <Button
        disabled={startDisabled}
        type="text"
        icon={<CustomIcon component={StopOutlined} />}
        onClick={handleStop}
      >
        {t("fuzzers.versions_tab.button.version_stop")}
      </Button>
    );
  } else {
    return (
      <Tooltip title={startDisabledTooltip}>
        <Button
          //  {...props}
          disabled={startDisabled}
          type="text"
          icon={<CustomIcon component={StartOutlined} />}
          onClick={handleStart}
        >
          {t("fuzzers.versions_tab.button.version_start")}
        </Button>
      </Tooltip>
    );
  }
};

export default StartStop;
