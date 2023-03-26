export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userDisplayName: action.payload.display_name,
        userId: action.payload.user_id,
        userProjectId: action.payload.proj_id,
        userProjectName: action.payload.proj_name,
        userProjectPool: action.payload.proj_pool,
        csrfToken: action.payload.csrf_token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        userDisplayName: "",
        userId: "",
        userProjectId: "",
        userProjectName: "",
        isAuthenticated: false,
      };
    case "SWITCH_PROJECT":
      return {
        ...state,
        userProjectId: action.payload.proj_id,
        userProjectName: action.payload.proj_name,
        userProjectPool: action.payload.proj_pool,
      };
    case "RENAME":
      return {
        ...state,
        userDisplayName: action.payload.display_name,
      };
    case "REFRESH_TOKEN":
      return {
        ...state,
        csrfToken: action.payload.csrf_token,
      };
    default:
      return state;
  }
};

// Fuzzers Reducer
export const fetchingReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, isFetching: true, hasError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        fuzzers: action.payload,
        hasError: false,
        currentFuzzerID: action.payload.length > 0 ? action.payload[0].id : 0,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };
    case "SET_FCONFS":
      return {
        ...state,
        fconfs: {
          langs: action.payload.fconfs.langs,
          engines: action.payload.fconfs.engines,
        },
      };
    case "SET_POOLS":
      return {
        ...state,
        pools: action.payload.pools,
      };
    case "SET_CURRENT":
      return {
        ...state,
        currentFuzzerID: action.payload.currentFuzzerID,
      };
    case "UPDATE_FUZZER":
      return {
        ...state,
        fuzzers: state.fuzzers.map((fuzzer) =>
          fuzzer.id === action.payload.updatedFuzzer.id
            ? action.payload.updatedFuzzer
            : fuzzer
        ),
      };
    case "RESET":
      return {
        ...state,
        currentFuzzerID: 0,
        fuzzers: [],
      };
    default:
      return state;
  }
};

// Versions Reducer
export const fetchingVersionsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, isFetching: true, hasError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        versions: action.payload,
        currentVersion: 0,
        hasError: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };
    case "SET_CURRENT":
      return {
        ...state,
        currentVersion: action.payload.currentVersion,
      };
    default:
      return state;
  }
};

//for current page to be known throughout app
export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload.path,
      };
    case "SET_TAB":
      return {
        ...state,
        fuzzerTab: action.payload.tab,
      };

    default:
      return state;
  }
};

export const formsErrorReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        fieldName: action.payload.fieldName,
        wording: action.payload.wording,
      };
    case "SET_COMMON":
      return {
        ...state,
        common: action.payload.common,
      };
    case "RESET":
      return { ...state, fieldName: "", wording: "", common: "" };
    default:
      return state;
  }
};
