import React from 'react'
import { useState } from 'react'
import * as S from './profile.styles'
import { CourseCard } from '../../components/cards/card'
import { ChangeUserInfo } from '../../components/modalChangeProfile/changeProfile'
import { ModalSelectWorkout } from '../../components/modalSelectWorkout/selectWorkout'

export const Profile = () => {
  const [modal, setModal] = useState('')
  const [workout, setWorkout] = useState('')
 
  return (
    <S.profileWrapper>
      <S.profileDiv>
        <S.profileHeader>
          <S.logo>
            <img src="/img/logo.svg" alt="logo"></img>
          </S.logo>
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
        {modal && <ChangeUserInfo mode={modal} closeModal={setModal} />}
        <S.userCourses>
          <S.profileTitle>Мои курсы</S.profileTitle>
          <S.coursesList>
            <CourseCard bgi="yoga" name="Йога" />
            <CourseCard bgi="stretching" name="Стретчинг" />
            <CourseCard bgi="bodyflex" name="Бодифлекс" />
            <CourseCard bgi="aerobic" name="Степ-аэробика" />
            <CourseCard bgi="fitness" name="Танцевальный фитнес" />
            {workout && <ModalSelectWorkout/>} 
          </S.coursesList>
        </S.userCourses>
      </S.profileDiv>
    </S.profileWrapper>
  )
}
