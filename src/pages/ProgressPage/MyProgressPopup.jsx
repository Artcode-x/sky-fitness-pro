import * as S from './MyProgress.styles'

export const MyProgressPopup = () => {
  return (
    <S.Container>
      <S.ProgressPopup>
        <S.ProgressPopupTitle>Ваш прогресс засчитан!</S.ProgressPopupTitle>
        <S.ProgressPopupImg src="/img/progress-ok.svg" alt="progress ok" />
      </S.ProgressPopup>
    </S.Container>
  )
}
