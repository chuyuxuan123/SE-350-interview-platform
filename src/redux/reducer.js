const initialState = {
  login: false,
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
    default:
      return state;
  }
};
