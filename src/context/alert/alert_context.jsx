import { createContext, useReducer } from "react";
import alertReducer from "./alert_reducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set a alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext
