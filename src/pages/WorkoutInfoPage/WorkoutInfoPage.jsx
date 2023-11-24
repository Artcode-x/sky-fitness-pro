import { useGetCoursesQuery } from 'services/courses'
import { Wrapper } from '../../index.styles'
import * as S from './WorkoutInfoPage.styles'
import { Header } from './components/Header'
import { SkillCard } from './components/SkillCard'
import { Recommend } from './components/Recommend'
import { Directions } from './components/Directions'
import { Motivation } from './components/Motivation'
import { Contacts } from './components/Contacts'

export const WorkoutInfoPage = ({ course = 'Стретчинг' }) => {
  const { data, isLoading, isError } = useGetCoursesQuery()
  const courseItems = (!isLoading && data) || []
  const selectedCourse = courseItems.find((item) => item.name === course)

  return (
    <Wrapper>
      <Header />
      <S.Main>
        <SkillCard selectedCourse={selectedCourse} />
        <S.Info>
          <Recommend selectedCourse={selectedCourse} />
          <Directions selectedCourse={selectedCourse} />
          <Motivation selectedCourse={selectedCourse} />
          <Contacts />
        </S.Info>
      </S.Main>
    </Wrapper>
  )
}
