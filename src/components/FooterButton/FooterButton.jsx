import * as S from './FooterButton.styles'

export const FooterButton = () => {
  const getUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <S.Footer>
      <S.FooterButton onClick={getUp}/>
    </S.Footer>
  )
}
