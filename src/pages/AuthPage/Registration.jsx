import React from "react";
import * as S from "./AuthPage.styles";


export const Registration = () => {
  
  return (
    <S.PageContainer>
      <S.ModalForm>
       
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo.svg" alt="logo" />
          </S.ModalLogo>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Логин"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"

              />
            </S.Inputs>

            <S.Buttons>
              <S.PrimaryButton >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>

      </S.ModalForm>
    </S.PageContainer>
  );
};
