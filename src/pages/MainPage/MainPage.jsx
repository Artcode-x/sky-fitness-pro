import { FooterButton } from '../../components/FooterButton/FooterButton'
import { HeaderGeneral } from '../../components/headerGeneralPage/HeaderGeneral'
import { Cards } from './Cards/Cards'
import { MainAdv } from './MainAdv'
import * as S from './MainPage.styles'
export const MainPage = () => {
  return (
    <S.Body>
      <HeaderGeneral />
      <MainAdv />
      <Cards />
      <FooterButton />
    </S.Body>
  )
}
