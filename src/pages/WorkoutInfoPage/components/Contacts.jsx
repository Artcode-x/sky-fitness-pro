// import { useAddCoursesMutation } from 'services/courses'
import * as S from '../WorkoutInfoPage.styles'

export const Contacts = ({ selectedCourse, SetActualCourse }) => {
  // const [addCourses] = useAddCoursesMutation()

  // const newArray = []
  // const signUpForTraining = async () => {
  //   await addCourses({ name: '1' }).unwrap()
  //   // newArray.push({ name: '1' })
  //   console.log(newArray)
  // }
  // console.log(selectedCourse.userCourses)
  // console.log(newArray)

  return (
    <S.Contacts>
      <S.ContactsContainer>
        <S.ContactsText>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.ContactsText>
        <S.ContactsButton>
          Записаться на тренировку
        </S.ContactsButton>
      </S.ContactsContainer>
      <S.ContactsImg src="/img/handset.svg" alt="contact" />
    </S.Contacts>
  )
}
