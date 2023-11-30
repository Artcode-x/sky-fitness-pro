import * as S from './MainAdv.styles'
export const MainAdv = () => {
  return (
    <S.Parent>
      <S.Adv>
        <S.AdvText>
          <S.AdvTextSmall>Онлайн-тренировки для занятий дома</S.AdvTextSmall>
          <S.AdvTextBig>
            Начните заниматься спортом<br /> и улучшите качество жизни
          </S.AdvTextBig>
        </S.AdvText>
      </S.Adv>
      <S.AdvContainer>
        <S.AdvImg />
      </S.AdvContainer>
    </S.Parent>
  )
}
