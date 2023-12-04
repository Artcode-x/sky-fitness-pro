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
  /* margin-bottom: 94px; */
  @media (max-width: 1200px) {
    display: flex;  
    gap: 30px;
  }
  @media (max-width: 767px) {
    display: flex;  
    flex-wrap: wrap;
    gap: 30px;
  }
`

export const Exercise = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 7;
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 35px;
  }
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
  padding-bottom: 32px;
  @media (max-width: 1200px) {
    display: flex;  
    flex-wrap: wrap;
    max-width: 638px;
    padding-left: 44px;
  }
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
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 14px;
  }
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
  border-radius: 22px;
  margin-right: 55px;
  border: 2px solid ;
  background: #edecff;
  border-color: ${(props) => props.$colors};
flex-shrink: 0;
`

export const InterVisualContainerFirst = styled.div`
  width: ${(props) => props.$percent === 100 ? props.$percent + 1 : props.$percent}%;
    background-color: ${(props) => props.$colors};
    height: 100%;
  border-radius: 22px;

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
  padding-left: 10px;
`
export const li = styled.li`
  display: flex;
  justify-content: space-between;
/* gap: 15px; */
  padding-top: 30px;
  @media (max-width: 1200px) {
    display: flex;
  justify-content: space-between;
  padding-top: 30px;
    align-items: center;
  }
  @media (max-width: 676px) {
    display: flex;
 flex-wrap: wrap;
 gap: 30px;
  }

`

export const TempErrorLoadingText = styled.h2`
  padding: 100px;
`
