import React, { createContext, useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../Acctions";
import AlertReducer from "./AlertReducer";

export const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {
  const initState = { Alert: null };
  const [state, dispatch] = useReducer(AlertReducer, initState);
  const { Alert } = state;

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
        }),
      3000
    );
  };

  return (
    <AlertContext.Provider value={{ Alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
