const initialState = {
  login: false,
  companyId: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload.login,
      };
    case "LOG_OUT":
      return initialState;
    case "SET_COMPANY_ID":
      return {
        ...state,
        companyId: action.payload.companyId,
      };
    default:
      return state;
  }
};
