export const setLogin = (login) => {
  return {
    type: "SET_LOGIN",
    payload: {
      login,
    },
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const setCompanyId = (companyId) => {
  return {
    type: "SET_COMPANY_ID",
    payload: {
      companyId,
    },
  };
};
