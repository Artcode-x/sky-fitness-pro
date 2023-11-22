import React from "react";
import * as S from "./AuthPage.styles";
import { Link, useNavigate } from "react-router-dom";
import { ChangeUserInfo } from "../../components/modalChangeProfile/changeProfile";

export const Login = () => {
  
  const navigate = useNavigate();
  const setUser = () => {
    localStorage.setItem("user", "token");
    navigate("/profile", { replace: true });
  };

  return (
    <ChangeUserInfo 
    mode={'logForm'}
    type={"button"}
    as={"button"}
    />
  );
};
