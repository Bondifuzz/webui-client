import i18n from "i18next";

const getActionConditions = (item) => {
  const { t } = i18n;
  let startDisabled =
    (item.status === "Stopped" && item.health === "Error") ||
    (item.status === "Unverified" && item.binaries.uploaded === false)
      ? true
      : false;
  let restartDisabled = item.status === "Unverified" ? true : false;
  let startDisabledTooltip =
    item.status === "Unverified" && item.binaries.uploaded === false
      ? t("fuzzers.versions_tab.button.version_start_disabled_noBinaries")
      : item.status === "Stopped" && item.health === "Error"
      ? t("fuzzers.versions_tab.button.version_start_disabled_fuzzerFailure")
      : null;

  let restartDisabledTooltip =
    restartDisabled && item.binaries.uploaded === false
      ? t("fuzzers.versions_tab.button.version_restart_disabled_noBinaries")
      : restartDisabled && item.binaries.uploaded
      ? t(
          "fuzzers.versions_tab.button.version_restart_disabled_beforeVerification"
        )
      : null;

  return {
    startDisabled,
    startDisabledTooltip,
    restartDisabled,
    restartDisabledTooltip,
  };
};

export default getActionConditions;
