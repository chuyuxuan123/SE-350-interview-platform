const initialState = {
  login: false,
  companyId: "",
  unreadMsg: 0,
  msgId: 0,
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
    case "INCR_UNREAD_MSG":
      return {
        ...state,
        unreadMsg: state.unreadMsg + 1,
      };
    case "CLEAR_UNREAD":
      return {
        ...state,
        unreadMsg: 0,
      };
    case "SET_MSG_ID":
      return {
        ...state,
        msgId: action.payload.msgId,
      };
    default:
      return state;
  }
};
