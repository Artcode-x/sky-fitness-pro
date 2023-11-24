import * as S from '../WorkoutInfoPage.styles'

export const Recommend = ({ selectedCourse }) => {
  return (
    <S.Recommend>
      <S.RecommendHeading>
        {selectedCourse?.conditions.suitable}
      </S.RecommendHeading>
      <S.RecommendItems>
        <S.RecommendItem>
          <S.RecommendItemLeft>
            <S.RecommendNumImg src="/img/num.svg" alt="number" />
            <S.RecommendNum>1</S.RecommendNum>
          </S.RecommendItemLeft>
          <S.RecommendItemRight>
            <S.RecommendItemText>
              Давно хотели попробовать йогу, но не решались начать.
            </S.RecommendItemText>
          </S.RecommendItemRight>
        </S.RecommendItem>
        <S.RecommendItem>
          <S.RecommendItemLeft>
            <S.RecommendNumImg src="/img/num.svg" alt="number" />
            <S.RecommendNum>2</S.RecommendNum>
          </S.RecommendItemLeft>
          <S.RecommendItemRight>
            <S.RecommendItemText>
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </S.RecommendItemText>
          </S.RecommendItemRight>
        </S.RecommendItem>
        <S.RecommendItem>
          <S.RecommendItemLeft>
            <S.RecommendNumImg src="/img/num.svg" alt="number" />
            <S.RecommendNum>3</S.RecommendNum>
          </S.RecommendItemLeft>
          <S.RecommendItemRight>
            <S.RecommendItemText>
              Ищете активность, полезную для тела и души.
            </S.RecommendItemText>
          </S.RecommendItemRight>
        </S.RecommendItem>
      </S.RecommendItems>
    </S.Recommend>
  )
}
