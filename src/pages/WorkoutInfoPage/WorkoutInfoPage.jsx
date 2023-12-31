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
import { Loader } from 'components/loader/Loader'

export const WorkoutInfoPage = () => {
  const { id } = useParams()
  const { data = [], isLoading, isError, error } = useGetCoursesQuery()
  const selectedCourse = data.find((item) => item._id === id)

  return (
    <Wrapper>
      <Header />
      <S.Main>
        {isError ? (
          <S.TempErrorLoadingText>Ошибка: {error.data}</S.TempErrorLoadingText>
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <SkillCard selectedCourse={selectedCourse} />
            <S.Info>
              <Recommend selectedCourse={selectedCourse} />
              <Directions selectedCourse={selectedCourse} />
              <Motivation selectedCourse={selectedCourse} />
              <Contacts selectedCourse={selectedCourse} />
            </S.Info>
          </>
        )}
      </S.Main>
    </Wrapper>
  )
}
