import { FooterButton } from '../../components/FooterButton/FooterButton'
import { CourseCard } from '../../components/cards/card'
import { Header } from 'pages/profile/profile'
import { useGetCoursesQuery } from 'services/courses'
import { Cards } from './Cards/Cards'
import { MainAdv } from './MainAdv'
import { Link } from 'react-router-dom'
import * as S from './MainPage.styles'

export const MainPage = () => {
  const { data, isLoading, isError } = useGetCoursesQuery()



  return (
    <S.Body>
      <Header main={true} />
      <MainAdv />
      <S.СoursesList>
        {/* <Link to="/workout-info-page">
          <CourseCard bgi="yoga" name="Йога" />
        </Link> */}
        {data?.length > 0 ? (
              data.map((course) => (
                <CourseCard
                  key={course._id}
                  name={course.name}
                />
              ))
            ) : (
              <div>Вы еще не приобрели ни одного курса
              </div>
            )}
      </S.СoursesList>
      <FooterButton />
    </S.Body>
  )
}
