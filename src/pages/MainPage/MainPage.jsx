import { FooterButton } from '../../components/FooterButton/FooterButton'
import { CourseCard } from '../../components/cards/card'
import { HeaderGeneral } from '../../components/headerGeneralPage/HeaderGeneral'
import { Cards } from './Cards/Cards'
import { MainAdv } from './MainAdv'
import { Link } from 'react-router-dom'
import * as S from './MainPage.styles'

export const MainPage = () => {
  return (
    <S.Body>
      <HeaderGeneral />
      <MainAdv />
      {/* <Cards /> */}
      <S.СoursesList>
        <Link to="/workout-info-page">
          <CourseCard bgi="yoga" name="Йога" />
        </Link>
          <CourseCard bgi="stretching" name="Стретчинг" />
          <CourseCard bgi="bodyflex" name="Бодифлекс" />
          <CourseCard bgi="aerobic" name="Степ-аэробика" />
          <CourseCard bgi="fitness" name="Танцевальный фитнес" />
      </S.СoursesList>
      <FooterButton />
    </S.Body>
  )
}
