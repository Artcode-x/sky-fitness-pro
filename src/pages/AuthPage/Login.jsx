import React from "react";
import * as S from "./AuthPage.styles";

export const Login = () => {
  

  return (
    <S.PageContainer>
      <S.ModalForm>

          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo.svg" alt="logo" />
          </S.ModalLogo>

                 <>
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
            </S.Inputs>
            <S.Buttons>
              <S.PrimaryButton>
                Войти
              </S.PrimaryButton>

                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>

            </S.Buttons>
          </>
      </S.ModalForm>
    </S.PageContainer>
  );
};
