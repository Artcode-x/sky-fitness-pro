import { Wrapper } from '../../index.styles'
import * as S from './WorkoutInfoPage.styles'

export const WorkoutInfoPage = () => {
  return (
    <Wrapper>
      <S.Header>
        <S.HeaderLogo src="/img/logo.svg" alt="logo" />
      </S.Header>
      <S.Main>
        <S.SkillCard>
          <S.SkillCardImg src="/img/skill-card-bg.png" alt="skill-card" />
          <S.SkillCardTitle>Йога</S.SkillCardTitle>
        </S.SkillCard>
        <S.Info>
          <S.Recommend>
            <S.RecommendHeading>Подойдет для вас, если:</S.RecommendHeading>
            <S.RecommendItems>
              <S.RecommendItem>
                <S.RecommendItemLeft>
                  <S.RecommendNumImg src="/img/num.svg" alt="number" />
                  <S.RecommendNum>1</S.RecommendNum>
                </S.RecommendItemLeft>
                <S.RecommendItemRight>
                  <S.RecommendItemText>
                    Давно хотели попробовать йогу, но не решались начать.
                  </S.RecommendItemText>
                </S.RecommendItemRight>
              </S.RecommendItem>
              <S.RecommendItem>
                <S.RecommendItemLeft>
                  <S.RecommendNumImg src="/img/num.svg" alt="number" />
                  <S.RecommendNum>2</S.RecommendNum>
                </S.RecommendItemLeft>
                <S.RecommendItemRight>
                  <S.RecommendItemText>
                    Хотите укрепить позвоночник, избавиться от болей в спине и
                    суставах.
                  </S.RecommendItemText>
                </S.RecommendItemRight>
              </S.RecommendItem>
              <S.RecommendItem>
                <S.RecommendItemLeft>
                  <S.RecommendNumImg src="/img/num.svg" alt="number" />
                  <S.RecommendNum>3</S.RecommendNum>
                </S.RecommendItemLeft>
                <S.RecommendItemRight>
                  <S.RecommendItemText>
                    Ищете активность, полезную для тела и души.
                  </S.RecommendItemText>
                </S.RecommendItemRight>
              </S.RecommendItem>
            </S.RecommendItems>
          </S.Recommend>

          <S.Directions>
            <S.DirectionsHeading>Направления:</S.DirectionsHeading>
            <S.DirectionsContainer>
              <S.DirectionsItems>
                <li>Йога для новичков</li>
                <li>Классическая йога</li>
                <li>Йогатерапия</li>
                <li>Кундалини-йога</li>
                <li>Хатха-йога</li>
                <li>Аштанга-йога</li>
              </S.DirectionsItems>
            </S.DirectionsContainer>
          </S.Directions>

          <S.Motivation>
            <S.MotivationText>
              Благодаря комплексному воздействию упражнений происходит
              проработка всех групп мышц, тренировка суставов, улучшается
              циркуляция крови. Кроме того, упражнения дарят отличное
              настроение, заряжают бодростью и помогают противостоять стрессам.
            </S.MotivationText>
          </S.Motivation>

          <S.Contacts>
            <S.ContactsContainer>
              <S.ContactsText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
              </S.ContactsText>
              <S.ContactsButton>Записаться на тренировку</S.ContactsButton>
            </S.ContactsContainer>
            <S.ContactsImg src="/img/handset.svg" alt="contact" />
          </S.Contacts>
        </S.Info>
      </S.Main>
    </Wrapper>
  )
}
