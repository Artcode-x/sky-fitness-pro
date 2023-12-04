import * as S from '../WorkoutInfoPage.styles'

export const PopupMessage = () => {
  return (
    <S.ProgressPopupX>
      <S.ProgressPopupTitleX>
        Вы были записаны на тренировку!
      </S.ProgressPopupTitleX>
      <S.ProgressPopupImgX src="/img/progress-ok.svg" alt="progress ok" />
    </S.ProgressPopupX>
  )
}
