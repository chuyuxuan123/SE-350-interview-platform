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

export const incrUnreadMsg = () => {
  return {
    type: "INCR_UNREAD_MSG",
  };
};

export const clearUnread = () => {
  return {
    type: "CLEAR_UNREAD",
  };
};

export const setMsgId = (msgId) => {
  return {
    type: "SET_MSG_ID",
    payload: {
      msgId,
    },
  };
};
