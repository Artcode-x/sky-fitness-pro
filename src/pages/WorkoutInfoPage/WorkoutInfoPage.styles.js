import styled from 'styled-components'
import { Heading } from '../../index.styles'
import { MButton } from '../../index.styles'

const theme = {
  textColor: '#000',
}

export const Header = styled.header``

export const HeaderLogo = styled.img`
  padding-top: 30px;
`

export const Main = styled.main``

export const SkillCard = styled.div`
  position: relative;
  margin-top: 71px;
  margin-bottom: 72px;
`
export const SkillCardImg = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 310px;
`

export const SmallDeviceSkillCardImg = styled(SkillCardImg)`
  @media (max-width: 375px) {
    max-width: 100%;
    max-height: auto;
  }
`

export const SkillCardTitle = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.8px;
  position: absolute;
  top: 30px;
  left: 30px;
`

export const Info = styled.div``

export const Recommend = styled.div``

export const RecommendHeading = styled.h2`
  ${Heading}

  padding-bottom: 40px;
`

export const RecommendItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 87px;
`

export const RecommendItemRight = styled.div``

export const RecommendItemText = styled.p`
  width: 244px;
  color: ${theme.textColor};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`

export const RecommendItem = styled.div`
  display: flex;
  gap: 24px;

  &:last-child {
    ${RecommendItemText} {
      width: 218px;
    }
  }
`

export const RecommendItemLeft = styled.div`
  position: relative;
  width: 67px;
  height: 67px;
  display: flex;
`

export const RecommendNumImg = styled.img`
  width: 100%;
`

export const RecommendNum = styled.div`
  width: 100%;
  color: ${theme.textColor};
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Directions = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`

export const DirectionsHeading = styled.h2`
  ${Heading}

  padding-bottom: 22px;
`

export const DirectionsContainer = styled.div`
  display: flex;
  color: ${theme.textColor};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`

export const DirectionsItems = styled.ul`
  padding-left: 38px;
  columns: 2;

  & li {
    padding-right: 182px;
  }

  @media (max-width: 767px) {
    columns: 1;
  }
`

export const Motivation = styled.div``

export const MotivationText = styled.p`
  color: ${theme.textColor};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`

export const Contacts = styled.div`
  display: flex;
  margin-top: 75px;
  margin-bottom: 95px;
  border-radius: 30px;
  background: #f9ebff;
  max-width: 1160px;
  min-height: 300px;
`

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding-left: 52px;
`

export const ContactsText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  max-width: 823px;
  padding-top: 46px;
`

export const ContactsButton = styled.button`
  ${MButton}
`

export const ContactsImg = styled.img`
  width: 298px;
  height: 296px;
  right: 0px;

  @media (max-width: 767px) {
    display: none;
  }
`
