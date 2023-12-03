import * as S from '../WorkoutInfoPage.styles'

export const Motivation = ({ selectedCourse }) => {
  const description2 = selectedCourse?.description2

  return (
    <S.Motivation>
      <S.MotivationText>{selectedCourse?.description}</S.MotivationText>
      {typeof description2 === 'string' ? (
        <S.MotivationText>{description2}</S.MotivationText>
      ) : (
        <>
          {description2?.title && (
            <S.MotivationText>{description2?.title}</S.MotivationText>
          )}
          {description2?.items && (
            <S.MotivationContainer>
              <S.MotivationItems>
                {description2?.items?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </S.MotivationItems>
            </S.MotivationContainer>
          )}
        </>
      )}
    </S.Motivation>
  )
}
