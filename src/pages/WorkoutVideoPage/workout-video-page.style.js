import styled from 'styled-components'

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
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
`

export const MainBigHeading = styled.h2`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    margin-bottom: 40px;
`

export const MainSmallHeading = styled.h3`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
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
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    padding-left: 40px;
    list-style: square !important;
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
    width: 275px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 46px;
    background: var(--palette-purple-90, #580EA2);
    color: #FAFAFA;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
`
export const MainProgress = styled.div`
    display: grid;
    grid-column-start: 8;
    grid-column-end: 17;
    background: #F2F2F2;
    border-radius: 30px;
    width: 638px;
    height: 336px;
`

export const ExerciseHeading = styled.h3`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    margin-top: 36px;
`

export const ProgressVisual = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Visual = styled.div`
    padding-left: 44px;
    display: flex;
    justify-content: space-between;
    text-align: left;
`

export const ProgressText = styled.p`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
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
    border: 2px solid #565EEF;
    background: #EDECFF;
`

export const VisualContainerSecond = styled.div`
    width: 278px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 22px;
    margin-right: 55px;
    border: 2px solid #FF6D00;
    background: #FFF2E0;
`

export const VisualContainerThird = styled.div`
    width: 278px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 22px;
    margin-right: 55px;
    border: 2px solid #9A48F1;
    background: #F9EBFF;
`

export const InterVisualContainerFirst = styled.div`
    width: 136px;
    background-color: #565eef;
    height: 36px;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
`

export const InterVisualContainerSecond = styled.div`
    width: 136px;
    background-color: #FF6D00;
    height: 36px;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
`

export const InterVisualContainerThird = styled.div`
    width: 136px;
    background-color: #9A48F1;
    height: 36px;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
`

export const MainTextPercent = styled.p`
    color: #fff !important;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
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

