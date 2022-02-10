import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DemoContext } from "../Context/ContextDemo";

function Private({ children }) {
  const { token } = useContext(DemoContext);
  if (!token) return <Navigate to="/signin" />;
  return children;
}

export default Private;
