import { createContext, useState } from "react";

export const DemoContext = createContext({ token: "", handleToken: () => {} });

export const DemoContextProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const handleToken = () => {
    setToken(!token);
  };
  const value = { token, handleToken };
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};
