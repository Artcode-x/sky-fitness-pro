import React from "react";
import * as S from "./AuthPage.styles";
import { ChangeUserInfo } from "../../components/modalChangeProfile/changeProfile";


export const Registration = () => {
  
  return (

    <ChangeUserInfo 
    mode={'regForm'}
    type={"button"}
    as={"button"}
    />
  
    );
};
