import styled, { css } from 'styled-components'
import yoga from './workoutcard2.png'

const cardBGIs = {
  yoga: css`
    background-image: url('${yoga}');
  `,
  stretching: css`
    margin-right: 23px;
  `,
  fitness: css`
    margin-right: 23px;
  `,
  aerobic: css`
    margin-right: 28px;
    fill: #a53939;
  `,
  bodyflex: css`
    margin-right: 24px;
  `,
}

const bgiMixin = (name) => {
  const bgi = cardBGIs[name]
  return bgi
}

export const courseCard = styled.li`
  width: 360px;
  height: 480px;
  border-radius: 30px;
//   background: rgba(205, 205, 205, 0.1);
//   backdrop-filter: blur(14.51865291595459px);
//   border-radius: 30px;
//   background: #fff;
  box-shadow:
    -10px 10px 16px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => bgiMixin(props.$bgi)}
`
