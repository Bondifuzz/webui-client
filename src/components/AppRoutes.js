import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../context";

const AppRoutes = ({ isPrivate, path, ...rest }) => {
  const user = useAuthState();
  return (
    <>
      {path === "/" && !Boolean(user.userId) && <Redirect to="/login" />}
      {path === "/" && Boolean(user.userId) && <Redirect to="/projects" />}
      {isPrivate && !Boolean(user.userId) && <Redirect to="/login" />}
      {!isPrivate && Boolean(user.userId) && <Redirect to="/projects" />}
      {<Route path={path} {...rest} />}
    </>
  );
};

export default AppRoutes;
