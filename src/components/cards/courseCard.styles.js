import styled, { css } from 'styled-components'
import yoga from './backgrounds/yogaBG.png'
import stretching from './backgrounds/stretchingBG.png'
import fitness from './backgrounds/fitnessBG.png'
import aerobic from './backgrounds/aerobicBG.png'
import bodyflex from './backgrounds/bodyflexBG.png'

const cardBGIs = {
  
"Йога": css`
    background-image: url('${yoga}');
  `,
  "Стретчинг": css`
    background-image: url('${stretching}');
  `,
  "Бодифлекс": css`
    background-image: url('${fitness}');
  `,
  "Танцевальный фитнес": css`
    background-image: url('${aerobic}');
  `,
  "Степ-аэробика": css`
    background-image: url('${bodyflex}');
  `,
}

const bgiMixin = (name) => {
  const bgi = cardBGIs[name]
  return bgi
}

export const courseCard = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 360px;
  height: 480px;
  padding: 30px 40px 27px 30px;
  border-radius: 30px;
  box-shadow:
    -10px 10px 16px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => bgiMixin(props.$bgi)}
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`
export const cardBtn = styled.button`
  padding: 10px 20px;
  border-radius: 80px;
  background: #c7e957;
  border: none;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  line-height: 115%; /* 23px */
  letter-spacing: -0.05px;
  transition: all 0.3s;
  &:hover {
    background: #daf289;
    transform: scale(1.05);
  }
  &:active {
    background: #ebffab;
  }
`

export const cardTitle = styled.div`
  width: 290px;
  height: 120px;
  color: #000;
  text-align: start;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 36px;
  font-weight: 700;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.5px;
`
