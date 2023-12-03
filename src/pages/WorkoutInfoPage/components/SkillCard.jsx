import { getSvg } from '../utils/getSvg'
import * as S from '../WorkoutInfoPage.styles'

export const SkillCard = ({ selectedCourse }) => {
  return (
    <S.SkillCard>
      {getSvg(selectedCourse?.name)}
      <S.SkillCardTitle>{selectedCourse?.name}</S.SkillCardTitle>
    </S.SkillCard>
  )
}
