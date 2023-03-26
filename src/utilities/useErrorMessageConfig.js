import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState, useFuzzers } from "../context";

const useErrorMessageConfig = () => {
  const userDetails = useAuthState();
  const userDispatch = useAuthDispatch();
  const { dispatch } = useFuzzers();
  const history = useHistory();
  return {
    userDetails: userDetails,
    userDispatch: userDispatch,
    fuzzerDispatch: dispatch,
    redirect: () => {
      history.push("/projects");
    },
  };
};

export default useErrorMessageConfig;
