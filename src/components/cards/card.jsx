import React from 'react'
import * as S from './courseCard.styles'

export const CourseCard = ({bgi, name}) => {
  return (
    <S.courseCard $bgi={bgi}>
      <S.cardTitle>{name}</S.cardTitle>
      <S.cardBtn>Перейти →</S.cardBtn>
    </S.courseCard>
)}
