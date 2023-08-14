import { ReactComponent as CancelOutlined } from "../assets/icons/CancelOutlined.svg";

//To hide parts that has no support from API yet
export const inDevelop = true;
export const projectCreationNotAllowed = false;
export const supportEmail = "support@bondifuzz.com";

// pool min values
export const ramMin = 500;
export const cpuMin = 500;
export const tmpfsMin = 100;
export const tmpfsMax = 1000;

export const drawerBasicConfig = {
  placement: "right",
  closable: true,
  closeIcon: <CancelOutlined className="iconDrawerClose" />,
};
