import { FooterButton } from '../../components/FooterButton/FooterButton'
import { CourseCard } from '../../components/cards/card'
import { Header } from 'pages/profile/profile'
import { useGetCoursesQuery } from 'services/courses'
import { MainAdv } from './MainAdv'
import { Link } from 'react-router-dom'
import * as S from './MainPage.styles'

export const MainPage = () => {
  const { data = [], isLoading, isError, error } = useGetCoursesQuery()

  return (
    <S.Body>
      <Header main={true} />
      <MainAdv />
      {isError ? (
        <S.TempErrorLoadingText>Ошибка: {error.data}</S.TempErrorLoadingText>
      ) : isLoading ? (
        <S.TempErrorLoadingText>...Загрузка</S.TempErrorLoadingText>
      ) : (
        <S.CoursesList>
          {data &&
            data?.map((course) => (
              <Link to={`/workout-info-page/${course._id}`} key={course._id}>
                <CourseCard name={course.name} />
              </Link>
            ))}
        </S.CoursesList>
      )}
      <FooterButton />
    </S.Body>
  )
}
