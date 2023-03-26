import { createContext, useContext, useReducer } from "react";
import { appReducer, authReducer, fetchingReducer } from "./reducer";

const AuthContext = createContext();
const AuthDispatchContext = createContext();
const FuzzContext = createContext();
const AppContext = createContext();

let checklocalStorageUser = localStorage.getItem("currentUser");

// Check for user session info presence in local storage
let userIdLS = checklocalStorageUser
  ? JSON.parse(checklocalStorageUser).user_id
  : "";
let userDisplayLS = checklocalStorageUser
  ? JSON.parse(checklocalStorageUser).display_name
  : "";

let userProjIdLS = checklocalStorageUser
  ? JSON.parse(checklocalStorageUser).proj_id
  : "";

let userProjNameLS = checklocalStorageUser
  ? JSON.parse(checklocalStorageUser).proj_name
  : "";
let userProjPoolLS = checklocalStorageUser
  ? JSON.parse(checklocalStorageUser).proj_pool
  : "";

// Initial values for User and Fuzzers
export const initialStateUser = {
  userDisplayName: userDisplayLS,
  userId: userIdLS,
  userProjectId: userProjIdLS,
  userProjectName: userProjNameLS,
  userProjectPool: userProjPoolLS,
  csrfToken: "",
  isAuthenticated: false,
};

export const initialStateFuzzers = {
  fuzzers: [],
  currentFuzzerID: 0,
  isFetching: false,
  hasError: false,
  fconfs: {},
  pools: [],
};

export const initialStateApp = {
  currentPage: checklocalStorageUser ? "fuzzers" : "login",
  fuzzerTab: "versions",
};

// Hooks for easier access to context (consumer)
const useAuthState = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
};
const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
};
const useFuzzers = () => {
  const context = useContext(FuzzContext);
  if (context === undefined) {
    throw new Error("useFuzzers must be used within a FuzzProvider");
  }
  return context;
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a AppProvider");
  }
  return context;
};

// Component for easier granting of context (provider)
const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialStateUser);
  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const FuzzProvider = ({ children }) => {
  const [fuzzersFetched, dispatch] = useReducer(
    fetchingReducer,
    initialStateFuzzers
  );

  return (
    <FuzzContext.Provider value={{ fuzzersFetched, dispatch }}>
      {children}
    </FuzzContext.Provider>
  );
};
const AppProvider = ({ children }) => {
  const [appConfig, dispatch] = useReducer(appReducer, initialStateApp);

  return (
    <AppContext.Provider value={{ appConfig, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export {
  useAuthState,
  useAuthDispatch,
  AuthProvider,
  FuzzProvider,
  AppProvider,
  useApp,
  useFuzzers,
};
