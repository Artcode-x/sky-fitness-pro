import * as S from '../WorkoutInfoPage.styles'

export const Directions = ({ selectedCourse }) => {
  return (
    <S.Directions>
      <S.DirectionsHeading>Направления:</S.DirectionsHeading>
      <S.DirectionsContainer>
        <S.DirectionsItems>
          <li>Йога для новичков</li>
          <li>Классическая йога</li>
          <li>Йогатерапия</li>
          <li>Кундалини-йога</li>
          <li>Хатха-йога</li>
          <li>Аштанга-йога</li>
        </S.DirectionsItems>
      </S.DirectionsContainer>
    </S.Directions>
  )
}
