import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={1}>{children}</GlobalContext.Provider>;
};
