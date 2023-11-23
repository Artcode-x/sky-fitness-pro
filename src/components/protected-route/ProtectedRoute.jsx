import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({
  children,
  redirectPath = "/auth",
  
}) => {
  
  const user = useSelector(state => state.user);

  if (!localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};
