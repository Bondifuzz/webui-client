import { ReactComponent as CancelOutlined } from "../assets/icons/CancelOutlined.svg";

//To hide parts that has no support from API yet
export const inDevelop = true;
export const projectCreationNotAllowed = false;
export const supportEmail = "support@bondifuzz.com";

export const drawerBasicConfig = {
  placement: "right",
  closable: true,
  closeIcon: <CancelOutlined className="iconDrawerClose" />,
};
