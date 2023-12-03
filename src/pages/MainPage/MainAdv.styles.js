import styled, { css } from 'styled-components'

export const Parent = styled.div`
  display: flex;
`

export const Center = css`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 612px);
`

export const Adv = styled.section`
  /* ${Center} */
  display: flex;
`

export const AdvText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const AdvTextSmall = styled.div`
  display: flex;
  color: var(--monochrome-white-20, #fff);
  opacity: 0.5;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: -0.05px;
`

export const AdvTextBig = styled.div`
  padding-top: 17px;
  color: #f4f4ff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 91.5%; /* 54.9px */
  letter-spacing: -1.169px;
  text-align: left;
`

export const AdvContainer = styled.div`
  margin-right: -14px;
`

export const AdvImg = styled.div`
  display: flex;
  background-size: auto;
  background-image: url(/img/cloud.svg);
  width: 229.27px;
  height: 191px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  margin-right: -24px;
`
