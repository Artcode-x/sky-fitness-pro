import * as S from '../WorkoutInfoPage.styles'

export const SkillCard = ({ selectedCourse }) => {
  return (
    <S.SkillCard>
      <S.SkillCardImg src="/img/skill-card-bg.png" alt="skill-card" />
      <S.SkillCardTitle>{selectedCourse?.name}</S.SkillCardTitle>
    </S.SkillCard>
  )
}
