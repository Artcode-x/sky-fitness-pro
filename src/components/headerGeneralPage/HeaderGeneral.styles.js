import styled, { css } from 'styled-components'

export const Center = css`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`

export const Header = styled.div`
  ${Center}
  display: flex;
  justify-content: space-between;
`
export const HeaderLogo = styled.a`
  padding-top: 30px;
`

export const HeaderLogoImg = styled.img`
  /* background-image: url(../../../public/img/logo-white.svg); */
  background-repeat: no-repeat;
  background-size: contain;
`

export const HeaderButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
export const HeaderButtonEnter = styled.button`
  padding: 5px 16px 7px 16px;
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  border-radius: 46px;
  background: #140d40;
  border: none;
  outline: none;
`
