import {
  DeleteOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../../assets/images/LogoWhite.svg";
import {
  logout,
  useAuthDispatch,
  useAuthState,
  useFuzzers,
} from "../../context";
import { useApp } from "../../context/context";
import styles from "./Navbar.module.css";
const { Item } = Menu;

const Navbar = () => {
  const userDispatch = useAuthDispatch();
  const userDetails = useAuthState();
  const { dispatch } = useFuzzers();
  const { appConfig, dispatch: appDispatch } = useApp();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const switchLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  const handleLogout = async () => {
    //to avoid pointing to non-existent fuzzer for another login
    dispatch({
      type: "RESET",
    });
    logout(userDispatch);
  };

  const handleClick = (e) => {
    appDispatch({ type: "SET_PAGE", payload: { path: e.key } });
  };

  //in case of page refresh
  useEffect(() => {
    let currentPath;
    if (location.pathname.slice(1).includes("/")) {
      if (/\d+\/\d+/gi.test(location.pathname.slice(1))) {
        return message.error("Invalid url", 4);
      } else {
        let lettersCheck = /\/([a-zA-Z]+)(?!.*\/)/g.exec(
          location.pathname.slice(1)
        );
        if (lettersCheck) {
          currentPath = lettersCheck[1];
        } else {
          currentPath = /([a-zA-Z]+)\/\d*(?!.*\/)/g.exec(
            location.pathname.slice(1)
          )[1];
        }
      }
    } else {
      currentPath = location.pathname.slice(1);
    }
    if (currentPath !== appConfig.currentPage) {
      appDispatch({
        type: "SET_PAGE",
        payload: { path: currentPath },
      });
    }
  }, []);

  return (
    <Header className={`NavbarContainer ${styles.NavContainer}`}>
      <Link
        to={`/projects/${userDetails.userProjectId}/fuzzers`}
        style={{
          paddingLeft: "20px",
          paddingTop: "4px",
        }}
      >
        <LogoWhite style={{ height: "var(--logo-height)", width: "auto" }} />
      </Link>

      <Row justify="end">
        {Boolean(userDetails.userId) === false ? (
          <Menu
            onClick={handleClick}
            className={styles.NavMenu}
            mode="inline"
            size="small"
          >
            <Dropdown
              placement="bottomCenter"
              overlay={
                <Menu onClick={(e) => switchLanguage(e.key)}>
                  <Item key="en">English</Item>
                  <Item key="ru">Русский</Item>
                </Menu>
              }
              overlayClassName="NavbarDropdown"
            >
              <Button
                type="ghost"
                style={{ border: "none", color: "white", marginTop: "10px" }}
              >
                <GlobalOutlined />
              </Button>
            </Dropdown>

            <Item className={styles.NavItem} key="login">
              <Button className="NavItemButton" type="ghost">
                <Link to="/login">{t("navbar.sign_in")}</Link>
              </Button>
            </Item>
          </Menu>
        ) : (
          <Menu
            onClick={handleClick}
            className={styles.NavMenu}
            selectedKeys={[appConfig.currentPage]}
            mode="inline"
            size="small"
          >
            <Item className={styles.NavItem} key="projects">
              <Button className="NavItemButton" type="ghost">
                <Link to="/projects">{t("navbar.projects")}</Link>
              </Button>
            </Item>
            <Item className={styles.NavItem} key="fuzzers">
              <Button
                className="NavItemButton"
                type="ghost"
                disabled={!Boolean(userDetails.userProjectId)}
              >
                <Link to={`/projects/${userDetails.userProjectId}/fuzzers`}>
                  {t("navbar.fuzzers")}
                </Link>
              </Button>
            </Item>
            <Item className={styles.NavItem} key="support">
              <Button className="NavItemButton" type="ghost">
                <Link to="/support">{t("navbar.support")}</Link>
              </Button>
            </Item>
            <Item className={styles.NavItem} key="documentation">
              <Button className="NavItemButton" type="ghost">
                <Link to="/documentation">{t("navbar.documentation")}</Link>
              </Button>
            </Item>
            <Item className={styles.NavItem} key="trash">
              <Button className="NavItemButton" type="ghost">
                <Link to="/trash">
                  <DeleteOutlined /> {t("navbar.trash")}
                </Link>
              </Button>
            </Item>

            <Dropdown
              placement="bottomCenter"
              overlay={
                <Menu onClick={(e) => switchLanguage(e.key)}>
                  <Item key="en">English</Item>
                  <Item key="ru">Русский</Item>
                </Menu>
              }
              overlayClassName="NavbarDropdown"
            >
              <Button
                type="ghost"
                style={{ border: "none", color: "white", marginTop: "10px" }}
              >
                <GlobalOutlined />
              </Button>
            </Dropdown>
            <Dropdown
              placement="bottomCenter"
              //arrow
              trigger={["click"]}
              overlay={
                <Menu>
                  <Item
                    className={styles.NavItem}
                    key="logout"
                    onClick={handleLogout}
                  >
                    <Link className={styles.NavItemLink} to="/">
                      {t("navbar.log_out")}
                    </Link>
                  </Item>
                  <Item className={styles.NavItem} key="settings">
                    <Link to="/settings"> {t("navbar.settings")}</Link>
                  </Item>
                </Menu>
              }
              overlayClassName="NavbarDropdown NavbarDropdownOverride"
            >
              <Button type="ghost" className="NavItemButtonDropdown">
                <UserOutlined />
                {userDetails.userDisplayName}
              </Button>
            </Dropdown>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
