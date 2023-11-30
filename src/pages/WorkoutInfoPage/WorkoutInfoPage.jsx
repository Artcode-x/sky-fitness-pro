import {
  useGetCoursesQuery,
  useAddCourseToUserMutation,
} from 'services/courses'
import { Wrapper } from '../../index.styles'
import * as S from './WorkoutInfoPage.styles'
import { SkillCard } from './components/SkillCard'
import { Recommend } from './components/Recommend'
import { Directions } from './components/Directions'
import { Motivation } from './components/Motivation'
import { Contacts } from './components/Contacts'
import { useAuth } from 'hooks/use-auth'
import { useParams } from 'react-router-dom'
import { Header } from 'pages/profile/profile'
import { useState } from 'react'

export const WorkoutInfoPage = () => {
  // Йога, Стретчинг, Бодифлекс, Танцевальный фитнес, Степ-аэробика
  const { id } = useParams()
  const { data = [], isLoading, isError, error } = useGetCoursesQuery()
  const selectedCourse = data.find((item) => item._id === id)

  // const courseIndex = data.indexOf(selectedCourse)
  // const { id: userId } = useAuth()
  // let userKey = selectedCourse?.users ? selectedCourse.users.length : 0
  // const body = { [userKey]: userId }
  // const json = JSON.stringify(body)
  // console.log(json)
  // const [signUp] = useAddCourseToUserMutation()

  // const handleSignUpForCourse = () => {
  //   signUp({ courseIndex, json })
  // }

  return (
    <Wrapper>
      <Header />
      <S.Main>
        {isError ? (
          <S.TempErrorLoadingText>Ошибка: {error.data}</S.TempErrorLoadingText>
        ) : isLoading ? (
          <S.TempErrorLoadingText>...Загрузка</S.TempErrorLoadingText>
        ) : (
          <>
            <SkillCard selectedCourse={selectedCourse} />
            <S.Info>
              <Recommend selectedCourse={selectedCourse} />
              <Directions selectedCourse={selectedCourse} />
              <Motivation selectedCourse={selectedCourse} />
              <Contacts
                selectedCourse={selectedCourse}
              />
            </S.Info>
          </>
        )}
      </S.Main>
    </Wrapper>
  )
}
