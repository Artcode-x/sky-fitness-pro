import { Link } from "react-router-dom"
import * as S from '../WorkoutInfoPage.styles'

export const Header = () => {
  return (
    <Link to="/">
      <S.Header>
        <S.HeaderLogo src="/img/logo.svg" alt="logo" />
      </S.Header>
    </Link>
  )
}
