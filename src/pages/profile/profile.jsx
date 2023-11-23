import React from 'react'
import { useState } from 'react'
import * as S from './profile.styles'
import { CourseCard } from '../../components/cards/card'
import { ModalSelectWorkout } from '../../components/modalSelectWorkout/selectWorkout'
import { ChangeUserInfo } from '../../components/modalChangeProfile/changeProfile'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const [modal, setModal] = useState('')
  const [workout, setWorkout] = useState(false)
  return (
    <S.profileWrapper>
      <S.profileDiv>
        <S.profileHeader>
          <Link to="/">
          <S.logo>
            <img src="/img/logo.svg" alt="logo"></img>
          </S.logo>
          </Link>
          <S.userInfo>
            <S.userImg />
            Сергей
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </S.userInfo>
        </S.profileHeader>
        <S.userProfile>
          <S.profileTitle>Мой профиль</S.profileTitle>
          <S.profileContent>
            <S.profileText>Логин: sergey.petrov96</S.profileText>
            <S.profileText>Пароль: 4fkhdj880d</S.profileText>
          </S.profileContent>
          <S.profileBtnBox>
            <S.profileBtn onClick={() => setModal('changeLog')}>
              Редактировать логин
            </S.profileBtn>
            <S.profileBtn onClick={() => setModal('changePass')}>
              Редактировать пароль
            </S.profileBtn>
          </S.profileBtnBox>
        </S.userProfile>
        {modal && (
          <S.modalBG>
            <ChangeUserInfo mode={modal} closeModal={setModal} />
          </S.modalBG>
        )}
        <S.userCourses>
          <S.profileTitle>Мои курсы</S.profileTitle>
          <S.coursesList>
            <CourseCard bgi="yoga" name="Йога" openModal={setWorkout} />
            <CourseCard
              bgi="stretching"
              name="Стретчинг"
              openModal={setWorkout}
            />
            <CourseCard
              bgi="bodyflex"
              name="Бодифлекс"
              openModal={setWorkout}
            />
            <CourseCard
              bgi="aerobic"
              name="Степ-аэробика"
              openModal={setWorkout}
            />
            <CourseCard
              bgi="fitness"
              name="Танцевальный фитнес"
              openModal={setWorkout}
            />
          </S.coursesList>
        </S.userCourses>
        {workout && <ModalSelectWorkout modalIsOpen={setWorkout} />}
      </S.profileDiv>
    </S.profileWrapper>
  )
}
