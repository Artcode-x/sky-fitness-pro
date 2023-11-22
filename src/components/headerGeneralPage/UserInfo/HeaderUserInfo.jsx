import { Link } from 'react-router-dom'
import * as S from '../HeaderGeneral.styles'

export const HeaderUserInfo = () => {
  return (
    <S.HeaderButton>
      <Link to="/login">
      <S.HeaderButtonEnter>Войти</S.HeaderButtonEnter>
      </Link>
    </S.HeaderButton>
  )
}
