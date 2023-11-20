import styled, { css } from 'styled-components'

export const Center = css`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`

export const Cards = styled.section`
  ${Center}
  padding-top: 52px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 37px;
  justify-items: center;
`

export const CardsDiv1 = styled.div`
  transition: 1s;
  display: flex;
  width: 360px;
  height: 480px;
  background-image: url(/img/card1c.svg);
  background-repeat: no-repeat;
  background-size: 100%;

  border-radius: 35px;
  &:hover {
    transform: scale(1.2);
  }
`

export const CardsDiv2 = styled.div`
  transition: 1s;
  display: flex;
  width: 360px;
  height: 480px;
  background-image: url(/img/card2c.svg);
  background-repeat: no-repeat;
  background-size: 100%;

  border-radius: 35px;
  &:hover {
    transform: scale(1.2);
  }
`
export const CardsDiv3 = styled.div`
  transition: 1s;
  display: flex;
  width: 360px;
  height: 480px;
  background-image: url(/img/card3.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    transform: scale(1.2);
  }
`
export const CardsDiv4 = styled.div`
  display: flex;
  width: 360px;
  height: 480px;
  background-image: url(/img/card4.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  transition: 1s;
  &:hover {
    transform: scale(1.2);
  }
`
export const CardsDiv5 = styled.div`
  transition: 1s;
  display: flex;
  width: 360px;
  height: 480px;
  background-image: url(/img/card5.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    transform: scale(1.2);
  }
`
