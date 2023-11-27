import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({
  children,
  redirectPath = "/auth",
  
}) => {
  
  const {email, token, id} = useSelector(state => state.user);

  if (!email) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};
