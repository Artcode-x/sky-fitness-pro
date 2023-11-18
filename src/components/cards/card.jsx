import React from 'react'
import * as S from './courseCard.styles'

export const CourseCard = ({bgi, name, openModal}) => {
  return (
    <S.courseCard $bgi={bgi}>
      <S.cardTitle>{name}</S.cardTitle>
      <S.cardBtn onClick={(e)=>{e.stopPropagation()
        openModal(true)}}>Перейти →</S.cardBtn>
    </S.courseCard>
)}
