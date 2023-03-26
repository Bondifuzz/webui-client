import i18n from "i18next";
import { logout } from "../context";

export default function handleErrorByCode(code, params) {
  const { t } = i18n;
  let relogin = t("error.instruction.relogin");
  let switchProject = t("error.instruction.choose_another_project");
  const handleLogout = () => {
    params.fuzzerDispatch({
      type: "RESET",
    });
    logout(params.userDispatch);
  };

  switch (code) {
    case "E_AUTHORIZATION_REQUIRED":
      handleLogout();
      return `${t("error.api_error.E_AUTHORIZATION_REQUIRED")}.${relogin}`;
    case "E_SESSION_NOT_FOUND":
      handleLogout();
      return `${t("error.api_error.E_SESSION_NOT_FOUND")}.${relogin}`;
    case "E_ACCESS_DENIED":
      handleLogout();
      return `${t("error.api_error.E_ACCESS_DENIED")}.${relogin}`;
    case "E_ACCOUNT_DISABLED ":
      return `${t("error.api_error.E_ACCOUNT_DISABLED")}.${relogin}`;
    case "E_PROJECT_NOT_FOUND":
      params.redirect();
      return `${t("error.api_error.E_PROJECT_NOT_FOUND")}. ${switchProject}`;
    case 500:
      return `${t("error.internal_server_error")}`;
    default:
      return t(`error.api_error.${code}`);
  }
}
