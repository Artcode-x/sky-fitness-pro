import React from 'react'
import * as S from './profile.styles'
import { CourseCard } from '../../components/cards/card'
// import logo from '../../../public/img/logo.svg'

export const Profile = () => {
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
          <S.profileText>Логин: sergey.petrov96</S.profileText>
          <S.profileText>Пароль: 4fkhdj880d</S.profileText>
        </S.userProfile>
        <S.userCourses>
          <S.profileTitle>Мои курсы</S.profileTitle>
          <S.coursesList>
            <CourseCard bgi='yoga'/>
            <CourseCard/>
            <CourseCard/>
          </S.coursesList>
        </S.userCourses>
      </S.profileDiv>
    </S.profileWrapper>
  )
}