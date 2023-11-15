import styled from 'styled-components';
// import yoga from './workoutcard2.png'

export const profileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const profileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
  background-color: #fafafa;
  overflow-x: hidden;
  width: 1440px;
  padding: 0 140px;
`
export const profileHeader = styled.div`
  width: 100%;
  min-height: 105px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const logo = styled.div`
  width: 220px;
  height: 35px;
  flex-shrink: 0;
`
export const userInfo = styled.div`
  min-width: 170px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #000;
  text-align: right;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.1px;
`
export const userImg = styled.div`
  background-color: #d9d9d9;
  border-radius: 25px;
  height: 50px;
  width: 50px;
`
export const userProfile = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
align-items: flex-start;
`
export const profileTitle = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
`
export const profileText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`
export const userCourses = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
export const coursesList = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 40px;
`
// export const courseCard = styled.li`
// width: 360px;
// height: 480px;
// border-radius: 30px;
// background: rgba(205, 205, 205, 0.10);
// backdrop-filter: blur(14.51865291595459px);
// border-radius: 30px;
// background: #FFF;
// box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.10), 10px -10px 16px 0px rgba(0, 0, 0, 0.10);
// background-image: url(${yoga});
// background-repeat: no-repeat;
// background-size: cover;
// `
export const svg = styled.svg`
width: 360px;
height: 480px;
`