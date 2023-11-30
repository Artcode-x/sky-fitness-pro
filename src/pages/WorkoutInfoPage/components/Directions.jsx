import * as S from '../WorkoutInfoPage.styles'

export const Directions = ({ selectedCourse }) => {
  const directions = selectedCourse?.directions
  return (
    <S.Directions>
      <S.DirectionsHeading>Направления:</S.DirectionsHeading>
      <S.DirectionsContainer>
        <S.DirectionsItems>
          {directions?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </S.DirectionsItems>
      </S.DirectionsContainer>
    </S.Directions>
  )
}
