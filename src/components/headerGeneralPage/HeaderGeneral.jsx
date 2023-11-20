import { HeaderUserInfo } from './UserInfo/HeaderUserInfo'
import * as S from './HeaderGeneral.styles'

export const HeaderGeneral = () => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <S.HeaderLogoImg src="/img/logo-white.svg" />
      </S.HeaderLogo>
      <HeaderUserInfo />
    </S.Header>
  )
}
