import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './profile.styles'
import { CourseCard } from '../../components/cards/card'
import { removeUser } from 'store/slices/userSlice'
import { ModalSelectWorkout } from '../../components/modalSelectWorkout/selectWorkout'
import { useDispatch } from 'react-redux'
import { useGetCoursesQuery } from 'services/courses'
import { ChangeUserInfo } from '../../components/modalChangeProfile/changeProfile'
import { Link } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { HeaderUserInfo } from 'components/headerGeneralPage/UserInfo/HeaderUserInfo'

export const Header = ({ main }) => {
  const [visible, setVisible] = useState(false)
  const { isAuth, email, token, id } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    navigate('/', { replace: true })
    dispatch(removeUser())
  }

  return (
    <S.profileHeader>
      <Link to="/">
        <S.logo>
          <img src={`/img/logo${main ? '-white1' : ''}.svg`} alt="logo"></img>
        </S.logo>
      </Link>
      {isAuth ? (
        <S.userInfo onMouseLeave={() => setVisible(false)} $main={main}>
          <S.userImg />
          {email}
          <S.svg
            $main={main}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            onClick={() => setVisible(!visible)}
          >
            <path
              d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308"
              strokeWidth="2"
            />
          </S.svg>

          <S.userInfoPopUp $visible={visible}>
            <S.popUpItem
              $main={main}
              onClick={() => navigate('/', { replace: true })}
            >
              На главную
            </S.popUpItem>
            <S.popUpItem
              $main={main}
              onClick={() => navigate('/profile', { replace: true })}
            >
              Профиль
            </S.popUpItem>
            <S.popUpItem $main={main} onClick={handleLogout}>
              Выйти
            </S.popUpItem>
          </S.userInfoPopUp>
        </S.userInfo>
      ) : (
        <HeaderUserInfo />
      )}
    </S.profileHeader>
  )
}

export const Profile = () => {
  const [modal, setModal] = useState('')
  const [workout, setWorkout] = useState(false)
  const { isAuth, email, token, id } = useAuth()

  const { data, isLoading, isError } = useGetCoursesQuery()
  // const courseItems = (!isLoading && data.ab1c3a.description) || {}

  return (
    <S.profileWrapper>
      <S.profileDiv>
        <Header />
        <S.userProfile>
          <S.profileTitle>Мой профиль</S.profileTitle>
          <S.profileContent>
            <S.profileText>Логин: {email}</S.profileText>
            <S.profileText style={{ color: 'red' }}>
              Пароль: 4fkhdj880d
            </S.profileText>
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
            {data?.length > 0 ? (
              data.map((course) => (
                <CourseCard
                  key={course._id}
                  name={course.name}
                  openModal={setWorkout}
                />
              ))
            ) : (
              <div>Вы еще не приобрели ни одного курса
              </div>
            )}
            {/* <CourseCard bgi="yoga" name="Йога" openModal={setWorkout} />
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
            /> */}
          </S.coursesList>
        </S.userCourses>
        {workout && <ModalSelectWorkout modalIsOpen={setWorkout} />}
      </S.profileDiv>
    </S.profileWrapper>
  )
}
