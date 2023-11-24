import * as S from '../WorkoutInfoPage.styles'

export const Contacts = () => {
  const signUpForTraining = () => {
    alert('Вы записались!')
  }

  return (
    <S.Contacts>
      <S.ContactsContainer>
        <S.ContactsText>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.ContactsText>
        <S.ContactsButton onClick={() => signUpForTraining()}>
          Записаться на тренировку
        </S.ContactsButton>
      </S.ContactsContainer>
      <S.ContactsImg src="/img/handset.svg" alt="contact" />
    </S.Contacts>
  )
}
