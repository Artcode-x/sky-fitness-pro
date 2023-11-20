import * as S from './MyProgress.styles'

export const MyProgress = () => {
  return (
    <S.Container>
      <S.Progress>
        <S.ProgressTitle>Мой прогресс</S.ProgressTitle>
        <S.ProgressForm>
          <S.ProgressText>
            Сколько раз вы сделали наклоны вперед?
          </S.ProgressText>
          <S.ProgressInput type="number" placeholder="Введите значение" />
          <S.ProgressText>Сколько раз вы сделали наклоны назад?</S.ProgressText>
          <S.ProgressInput type="number" placeholder="Введите значение" />
          <S.ProgressText>
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </S.ProgressText>
          <S.ProgressInput type="number" placeholder="Введите значение" />
        </S.ProgressForm>
        <S.ProgressForButton>
          <S.ProgressButton>Отправить</S.ProgressButton>
        </S.ProgressForButton>
      </S.Progress>
    </S.Container>
  )
}
