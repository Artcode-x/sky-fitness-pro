import React from "react";
import styled from "styled-components";

const NewPasswordWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const PasswordDiv = styled.div`
  background-color: #ffffff;
  height: 401px;
  position: relative;
  width: 366px;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "StratosSkyeng-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 41px;
  letter-spacing: -0.05px;
  line-height: 24px;
  position: absolute;
  top: 105px;
  white-space: nowrap;
`;

const VectorImage = styled.img`
  height: 1px;
  left: 40px;
  object-fit: cover;
  position: absolute;
  top: ${(props) => (props.top ? props.top : '182px')};
  width: 278px;
`;

const LogoImage = styled.img`
  height: 35px;
  left: 73px;
  position: absolute;
  top: 33px;
  width: 222px;
`;

const GroupDiv = styled.div`
  height: 52px;
  left: 41px;
  position: absolute;
  top: 302px;
  width: 280px;
`;

const OverlapGroup = styled.div`
  background-color: var(--palettepurple-90);
  border-radius: 46px;
  height: 52px;
  position: relative;
  width: 278px;
`;

export const ChangeUserInfo = () => {
  return (
    <NewPasswordWrapper>
      <PasswordDiv>
        <TextWrapper>Новый пароль:</TextWrapper>
        <VectorImage alt="Vector" src="vector-4053.svg" />
        <VectorImage alt="Vector" src="vector-4054.svg" top="252px" />
        <TextWrapper style={{ top: '149px' }}>Пароль</TextWrapper>
        <TextWrapper style={{ top: '219px' }}>Повторите пароль</TextWrapper>
        <LogoImage alt="Logo" src="logo.svg" />
        <GroupDiv>
          <OverlapGroup>
            <TextWrapper style={{ top: '12px', left: '94px' }}>Сохранить</TextWrapper>
          </OverlapGroup>
        </GroupDiv>
      </PasswordDiv>
    </NewPasswordWrapper>
  );
};