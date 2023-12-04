import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './profile.styles'
import { setUser } from 'store/slices/userSlice'
import { CourseCard } from '../../components/cards/card'
import { removeUser } from 'store/slices/userSlice'
import { ModalSelectWorkout } from '../../components/modalSelectWorkout/selectWorkout'
import { useDispatch } from 'react-redux'
import { useGetCoursesQuery } from 'services/courses'
import { ChangeUserInfo } from '../../components/modalChangeProfile/changeProfile'
import { Link } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { HeaderUserInfo } from 'components/headerGeneralPage/UserInfo/HeaderUserInfo'
import {
  getAuth,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth'
import { Loader } from 'components/loader/Loader'

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
        <S.userInfo
          onMouseLeave={() => setVisible(false)}
          $main={main}
          onClick={() => setVisible(!visible)}
        >
          <S.userImg />
          {email}
          <S.svg
            $main={main}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
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
  const [workout, setWorkout] = useState('')
  const { isAuth, email, token, id } = useAuth()
  const { data, isLoading, isError } = useGetCoursesQuery()
  const [loading, setLoading] = useState(false)
  const [authErrors, setAuthErrors] = useState(null)
  const [newCredentials, setNewCredentials] = useState(null)
  const dispatch = useDispatch()
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }),
      )
    } else {
      console.log('User is signed out')
    }
  })

  const changeLogin = (newCredential) => {
    setLoading(true)
    updateEmail(auth?.currentUser, newCredential?.email)
      .then(() => {
        setLoading(false)
        setModal('')
        console.log('Login successfully changed')
      })
      .catch((error) => {
        if (error.message == 'Firebase: Error (auth/requires-recent-login).') {
          const credential = EmailAuthProvider.credential(
            auth?.currentUser?.email,
            newCredentials.confirm,
          )
          reauthenticateWithCredential(auth?.currentUser, credential).then(
            console.log('reauthenticated'),
          )
          changeLogin(newCredential)
        } else {
          setAuthErrors(error.message)
          setLoading(false)
        }
      })
  }

  const changePassword = (newCredential) => {
    setLoading(true)
    updatePassword(auth?.currentUser, newCredential?.password)
      .then(() => {
        setLoading(false)
        setModal('')
        console.log('Password successfully changed')
      })
      .catch((error) => {
        if (error.message == 'Firebase: Error (auth/requires-recent-login).') {
          const credential = EmailAuthProvider.credential(
            auth?.currentUser?.email,
            newCredentials.confirm,
          )
          reauthenticateWithCredential(auth?.currentUser, credential).then(
            console.log('reauthenticated'),
          )
          changePassword(newCredential)
        } else {
          setAuthErrors(error.message)
          setLoading(false)
        }
      })
  }

  useEffect(() => {
    if (newCredentials && modal == 'changeLog') {
      changeLogin(newCredentials)
    }
    if (newCredentials && modal == 'changePass') {
      changePassword(newCredentials)
    }
  }, [newCredentials, setNewCredentials])

  return (
    <S.profileWrapper>
      <S.profileDiv>
        <Header />
        <S.userProfile>
          <S.profileTitle>Мой профиль</S.profileTitle>
          <S.profileContent>
            <S.profileText>Логин: {email}</S.profileText>
            {/* <S.profileText style={{ color: 'red' }}>
              Пароль: 4fkhdj880d
            </S.profileText> */}
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
            <ChangeUserInfo
              mode={modal}
              closeModal={setModal}
              setData={setNewCredentials}
              loading={loading}
              apiErrors={authErrors}
            />
          </S.modalBG>
        )}
        <S.userCourses>
          <S.profileTitle>Мои курсы</S.profileTitle>
          <S.coursesList>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {data?.length > 0 ? (
                  data
                    .filter((item) => item?.users?.includes(id))
                    .map((course) => (
                      <CourseCard
                        key={course._id}
                        name={course.name}
                        openModal={setWorkout}
                      />
                    ))
                ) : (
                  <S.profileTitle>
                    Вы еще не приобрели ни одного курса
                  </S.profileTitle>
                )}
              </>
            )}
          </S.coursesList>
        </S.userCourses>
        {workout && (
          <ModalSelectWorkout modalIsOpen={workout} closeModal={setWorkout} />
        )}
      </S.profileDiv>
    </S.profileWrapper>
  )
}
