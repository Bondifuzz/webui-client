import Documentation from "../pages/Documentation";
import Fuzzers from "../pages/Fuzzers";
import Login from "../pages/Login";
import { Integrations, Project, Projects, UserBin } from "../pages/Projects";
import Settings from "../pages/Settings";
import Support from "../pages/Support";
import Trash from "../pages/Trash";

export const routes = [
  { path: "/login", component: Login, exact: true, isPrivate: false },
  {
    path: "/documentation",
    component: Documentation,
    exact: true,
    isPrivate: true,
  },
  { path: "/support", component: Support, exact: true, isPrivate: true },
  { path: "/trash", component: Trash, exact: true, isPrivate: true },
  { path: "/projects", component: Projects, exact: true, isPrivate: true },
  { path: "/settings", component: Settings, exact: true, isPrivate: true },
  {
    path: "/projects/user-bin",
    component: UserBin,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/projects/:projectId",
    component: Project,
    exact: true,
    isPrivate: true,
  },
  // Integrations service is unavailable in current version
  // {
  //   path: "/projects/:projectId/integrations",
  //   component: Integrations,
  //   exact: true,
  //   isPrivate: true,
  // },
  {
    path: "/projects/:projectId/fuzzers",
    component: Fuzzers,
    exact: false,
    isPrivate: true,
  },
  { path: "/", exact: true },
];
