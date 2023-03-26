import { Button, Tooltip } from "antd";
import React from "react";
import styles from "./WrapButton.module.css";

const WrapButton = ({ children, tooltip, ...props }) => {
  return (
    <Tooltip title={tooltip}>
      <Button size="large" {...props} className={styles.WrappButton}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default WrapButton;
