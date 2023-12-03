import { useAddCoursesMutation, useGetCoursesQuery } from 'services/courses'

import * as S from '../WorkoutInfoPage.styles'
import { useAuth } from 'hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { MyProgressPopup } from 'pages/ProgressPage/MyProgressPopup'
import { PopupMessage } from './Popup'

export const Contacts = ({ selectedCourse }) => {
  const { data, isLoading, isError } = useGetCoursesQuery()
  // получаем id выбранного курса
  const selectedCourseID = data.indexOf(selectedCourse)
  const { isAuth, email, token, id } = useAuth()
  const userID = { id }
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(false)
  const [hide, setHide] = useState(true)
  const [Popup, setPopup] = useState(false)
  const signUpForTraining = async () => {
    if (!userID) {
      navigate('/auth')
    } else {
      // в бд в массив users
      try {
        setDisabled(true)
        // получаем актуальные данные уже записавшихся юзеров
        async function sendUser() {
          const response = await axios.get(
            `https://fitness-pro-21689-default-rtdb.europe-west1.firebasedatabase.app/courses/${selectedCourseID}/users.json`,
          )

          // возвр-ем нужную нам инфо
          return response.data
        }

        async function sendUserId(res) {
          return axios({
            method: 'patch',
            url: `https://fitness-pro-21689-default-rtdb.europe-west1.firebasedatabase.app/courses/${selectedCourseID}.json`,
            data: {
              // чтобы сохр-ть предее сост-ие ...res
              users: [...res, id],
            },
          })
        }

        const res = await sendUser()

        if (res.find((el) => el === id)) {
          // не добавляем в базу
          throw new Error('Вы уже были записаны на тренировку')
        } else {
          // добавляем в базу
          sendUserId(res)
          setPopup(true)
          setTimeout(() => {
            window.location.reload()
          }, 2500)
        }
      } catch (error) {
        if (error.message === 'Вы уже были записаны на тренировку') {
          alert('Вы уже записаны')
          setHide(false)
        }
      } finally {
        setDisabled(false)
      }
    }
  }

  return (
    <>
      {Popup ? (
        <>
          <S.Progres>
            <S.Popup>
              <PopupMessage />
            </S.Popup>
          </S.Progres>
        </>
      ) : (
        <S.Contacts>
          <S.ContactsContainer>
            <S.ContactsText>
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
              выбором направления и тренера, с которым тренировки принесут
              здоровье и радость!
            </S.ContactsText>

            {hide ? (
              <S.ContactsButton disabled={disabled} onClick={signUpForTraining}>
                Записаться на тренировку
              </S.ContactsButton>
            ) : (
              ''
            )}
          </S.ContactsContainer>
          <S.ContactsImg src="/img/handset.svg" alt="contact" />
        </S.Contacts>
      )}
    </>
  )
}
