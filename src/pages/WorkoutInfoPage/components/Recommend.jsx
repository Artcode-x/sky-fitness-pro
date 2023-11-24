import * as S from '../WorkoutInfoPage.styles'

export const Recommend = ({ selectedCourse }) => {
  const conditions = selectedCourse?.conditions

  return (
    <S.Recommend>
      <S.RecommendHeading>{conditions?.suitable}</S.RecommendHeading>
      <S.RecommendItems>
        {conditions?.items?.map((item, index) => (
          <S.RecommendItem key={index}>
            <S.RecommendItemLeft>
              <S.RecommendNumImg src="/img/num.svg" alt="number" />
              <S.RecommendNum>{index + 1}</S.RecommendNum>
            </S.RecommendItemLeft>
            <S.RecommendItemRight>
              <S.RecommendItemText>{item}</S.RecommendItemText>
            </S.RecommendItemRight>
          </S.RecommendItem>
        ))}
      </S.RecommendItems>
    </S.Recommend>
  )
}
