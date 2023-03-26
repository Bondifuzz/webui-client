import { Breadcrumb } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useAuthState, useFuzzers } from "../../../context";

const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const userDetails = useAuthState();
  const { fuzzersFetched } = useFuzzers();
  let currentFuzzer = fuzzersFetched.fuzzers.find(
    (item) => item.id === fuzzersFetched.currentFuzzerID
  );

  return (
    <Breadcrumb separator={">"}>
      {/* /projects */}
      {location.pathname === "/projects" && (
        <Breadcrumb.Item>
          {t("projects.breadcrumb.all_projects")}
        </Breadcrumb.Item>
      )}
      {/* /projects/ +smth */}

      {/projects\//gi.test(location.pathname) && (
        <Breadcrumb.Item>
          <Link to="/projects">{t("projects.breadcrumb.all_projects")}</Link>
        </Breadcrumb.Item>
      )}
      {/* /projects/#id */}

      {/projects\/\d+$/gi.test(location.pathname) && (
        <Breadcrumb.Item>{userDetails.userProjectName}</Breadcrumb.Item>
      )}

      {/* /projects/user-bin */}

      {location.pathname === "/projects/user-bin" && (
        <Breadcrumb.Item>
          {t("projects.breadcrumb.bin_projects")}
        </Breadcrumb.Item>
      )}

      {/* /projects/#id/integrations or fuzzers  Link to Project*/}

      {/projects\/\d+\/(integrations|fuzzers)/gi.test(location.pathname) && (
        <Breadcrumb.Item>
          <Link to={`/projects/${userDetails.userProjectId}`}>
            {userDetails.userProjectName}
          </Link>
        </Breadcrumb.Item>
      )}
      {/* /projects/#id/integrations integartion */}
      {/projects\/\d+\/integrations/gi.test(location.pathname) && (
        <Breadcrumb.Item>
          {t("projects.breadcrumb.integrations")}&nbsp;
          {userDetails.userProjectName}
        </Breadcrumb.Item>
      )}

      {/projects\/\d+\/fuzzers/gi.test(location.pathname) && (
        <Breadcrumb.Item>{currentFuzzer.name}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
