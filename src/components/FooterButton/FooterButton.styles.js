import styled, { css } from 'styled-components'

export const Center = css`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 34px;
`

export const FooterButton = styled.button`
  width: 147px;
  height: 48px;
  background-image: url(/img/Button.svg);
  border-radius: 46px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  margin-bottom: 60px;
`
