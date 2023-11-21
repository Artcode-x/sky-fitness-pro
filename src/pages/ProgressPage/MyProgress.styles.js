import styled from 'styled-components'
import { MButton } from '../../index.styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Progress = styled.div`
  width: 361px;
`

export const ProgressTitle = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-top: 36px;
`

export const ProgressForm = styled.div``

export const ProgressText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  padding-top: 34px;
  padding-bottom: 22px;
`

export const ProgressInput = styled.input`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 361px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #d0cece;
  outline: none;
  -moz-appearance: textfield;

  &::placeholder {
    background-color: transparent;
    color: #d0cece;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ProgressForButton = styled.div`
  display: flex;
  justify-content: center;
`

export const ProgressButton = styled.button`
  ${MButton}

  width: 278px;
  margin: 43px 0 44px 0;
`

// progress popup
export const ProgressPopup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
`

export const ProgressPopupTitle = styled.h1`
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  width: 268px;
`

export const ProgressPopupImg = styled.img`
  width: 245px;
  height: 226px;
  padding-top: 7px;
`
