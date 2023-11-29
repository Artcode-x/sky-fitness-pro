import styled from 'styled-components'
import { MButton } from '../../index.styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 75px;
`

export const HeaderUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 12px;
`

export const MainText = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
`

export const MainBigHeading = styled.h2`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  margin-top: 45px;
  margin-bottom: 40px;
`

export const MainSmallHeading = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`
export const MainVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
export const MainUl = styled.ul`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  padding-left: 35px;
`

export const MainLi = styled.li`
  /* list-style: disc !important; */
`

export const MainExercises = styled.div`
  display: grid;
  grid-template-columns: (16, 1fr);
  margin-top: 75px;
  margin-bottom: 94px;
`

export const Exercise = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 7;
`
export const Button = styled.button`
  ${MButton}
`
export const MainProgress = styled.div`
  display: grid;
  grid-column-start: 8;
  grid-column-end: 17;
  background: #f2f2f2;
  border-radius: 30px;
  width: 638px;
  min-height: 336px;
`

export const ExerciseHeading = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-top: 36px;
`

export const ProgressVisual = styled.div`
  display: flex;
  gap: 30px;

  
`
export const Visual = styled.ul`
  padding-left: 44px;
  display: grid;
  justify-content: space-between;
  text-align: left;
  columns: 2;
  list-style: none;  
`

export const ProgressText = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  margin: 0px;
  padding: 0px;
`

export const VisualContainerFirst = styled.div`
  width: 278px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 22px;
  margin-right: 55px;
`

export const InterVisualContainerFirst = styled.div`
  width: 136px;
  height: 36px;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  position: relative;
  top: -2px;
  left: -2px;
  

`

export const InterVisualContainerSecond = styled.div`
  width: 136px;
  background-color: #ff6d00;
  height: 36px;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  position: relative;
  top: -2px;
  left: -2px;
`

export const InterVisualContainerThird = styled.div`
  width: 136px;
  background-color: #9a48f1;
  height: 36px;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  position: relative;
  top: -2px;
  left: -2px;
`

export const MainTextPercent = styled.p`
  color: #fff !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.05px;
  margin: 0px;
  padding: 0px;
  text-align: right;
  padding-right: 10px;
`
export const li = styled.li`
  display: flex;
  justify-content: space-between;
  /* gap: 15px; */
  padding-top: 30px;
`

export const TempErrorLoadingText = styled.h2`
  padding: 100px;
`

export const Main = styled.main`
  margin-bottom: 100px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
    text-align: left;
    padding-top: 20px;
`
