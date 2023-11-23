import React from "react";
import * as S from "./AuthPage.styles";
import { ChangeUserInfo } from "../../components/modalChangeProfile/changeProfile";
import { AuthPage } from "./Auth";


export const Registration = () => {
  
  return (

    <AuthPage 
    mode={'regForm'}
    />
  
    );
};
