import { useGetCoursesQuery } from 'services/courses'
import { Wrapper } from '../../index.styles'
import * as S from './WorkoutInfoPage.styles'
import { Header } from './components/Header'
import { SkillCard } from './components/SkillCard'
import { Recommend } from './components/Recommend'
import { Directions } from './components/Directions'
import { Motivation } from './components/Motivation'
import { Contacts } from './components/Contacts'

export const WorkoutInfoPage = ({ course = 'Степ-аэробика' }) => {
  // Йога, Стретчинг, Бодифлекс, Танцевальный фитнес, Степ-аэробика
  const { data = [], isLoading, isError, error } = useGetCoursesQuery()
  const selectedCourse = data.find((item) => item.name === course)
  console.log(selectedCourse);

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
              <Contacts />
            </S.Info>
          </>
        )}
      </S.Main>
    </Wrapper>
  )
}
