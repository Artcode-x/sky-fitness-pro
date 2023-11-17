import { styled } from 'styled-components'

export const modalBG = styled.div`
position: fixed;
    left: 0px;
    top: 0px;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
` 
export const selectWorkout = styled.div`
width: 444px;
min-height: 300px;
border-radius: 12px;
background: #FFF;
padding: 36px 53px;
`
export const selectWorkoutTitle = styled.h2`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-size: 32px;
font-weight: 400;
line-height: 40px; /* 125% */
margin-bottom: 40px`

export const workoutsList = styled.ul`
max-height: 360px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 12px;
align-items: center;
overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.15);
  }`
export const workoutsListItem = styled.li`
cursor: pointer;
width: 278px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 6px;
align-items: center;
border-radius: 26px;
border: ${(props) => (props.$isDone? '1px solid #06B16E' : '1px solid #000')};
color: ${(props) => (props.$isDone? '#06B16E' : '#000')};
text-align: center;
font-variant-numeric: lining-nums proportional-nums;
padding: 12px 26px 18px 26px

`
export const workoutName = styled.h4`
font-size: 20px;
font-weight: 400;
line-height: 115%; /* 23px */
letter-spacing: -0.05px;
`
export const workoutCourse = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 18px; /* 112.5% */
letter-spacing: 0.016px;
`
