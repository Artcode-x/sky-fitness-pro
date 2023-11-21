import styled from 'styled-components'
import { MButton } from '../../index.styles'

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
  gap: 50px;
  background-color: #fafafa;
  padding: 0 140px;
`
export const profileHeader = styled.div`
  width: 100%;
  min-height: 95px;
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
  font-size: 24px;
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
  gap: 40px;
  align-items: flex-start;
`
export const profileTitle = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 48px;
  line-height: 56px; /* 116.667% */
`
export const profileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`

export const profileText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  line-height: 32px; /* 133.333% */
`
export const userCourses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
`
export const coursesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 60px;
  width: 100%;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start; */
  justify-content: center;
  gap: 40px;
`
export const profileBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`

export const profileBtn = styled.button`
  ${MButton}
  transition: all 0.3s;
  &:hover {
    
    transform: scale(1.05);
  }
`
