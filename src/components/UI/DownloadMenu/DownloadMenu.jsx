import { Menu, notification } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  downloadFuzzerCorpus,
  downloadVersionFiles,
  useAuthState,
  useFuzzers,
} from "../../../context";
import handleErrorByCode from "../../../utilities/handleErrorByCode";
import useErrorMessageConfig from "../../../utilities/useErrorMessageConfig";

const DownloadMenu = (props) => {
  const userDetails = useAuthState();
  const { t } = useTranslation();
  const { fuzzersFetched } = useFuzzers();
  const { fuzzers, currentFuzzerID } = fuzzersFetched;
  const errorHandlerConfig = useErrorMessageConfig();

  let currentFuzzerIndex = fuzzers.findIndex((el) => el.id === currentFuzzerID);
  const handleMenuClick = async (e) => {
    try {
      if (e.key === "corpus") {
        await downloadFuzzerCorpus(userDetails, fuzzers[currentFuzzerIndex].id);
      } else {
        await downloadVersionFiles(
          userDetails,
          fuzzers[currentFuzzerIndex].id,
          fuzzers[currentFuzzerIndex].active_revision.id,
          e.key
        );
      }
    } catch (error) {
      return notification.error({
        message: t("notification.message.error"),
        description: handleErrorByCode(error.code, errorHandlerConfig),
        className: "Notifications",
      });
    }
  };
  let downloadOptions = [
    {
      key: "corpus",
      label: t("fuzzers.button.download_corpus"),
    },
    {
      key: "binaries",
      label: t("fuzzers.button.download_binaries"),
      disabled: !fuzzers[currentFuzzerIndex].active_revision?.binaries.uploaded,
    },
    {
      key: "config",
      label: t("fuzzers.button.download_config"),
      disabled: !fuzzers[currentFuzzerIndex].active_revision?.config.uploaded,
    },
    {
      key: "seeds",
      label: t("fuzzers.button.download_seeds"),
      disabled: !fuzzers[currentFuzzerIndex].active_revision?.seeds.uploaded,
    },
  ];
  return (
    <Menu {...props} onClick={handleMenuClick}>
      {downloadOptions.map((item) => (
        <Menu.Item key={item.key} disabled={item.disabled}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default DownloadMenu;
