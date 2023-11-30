import axios from 'axios'
import { useAuth } from 'hooks/use-auth'
import { useState } from 'react'
import * as S from './MyProgress.styles'
import { MyProgressPopup } from './MyProgressPopup'

const baseUrl =
  'https://fitness-pro-21689-default-rtdb.europe-west1.firebasedatabase.app/workouts/'

export const MyProgress = ({ open, setOpen, workout, selectedWorkoutId }) => {
  const [okPopupOpen, setOkPopupOpen] = useState(false)
  const [exerciseResults, setExerciseResults] = useState({})

  const { id } = useAuth()

  const handleInputChange = (exerciseName, value) => {
    setExerciseResults((prevResults) => ({
      ...prevResults,
      [exerciseName]: value,
    }))
  }

  const handleSendResults = async () => {
    try {
      const response = await axios.patch(
        `${baseUrl}${selectedWorkoutId}/users.json`,
        {
          [id]: exerciseResults,
        },
      )

      setOkPopupOpen(true)

      setTimeout(() => {
        setOpen(!open)
        window.location.reload()
      }, 1000)

      // setOpen(!open)
    } catch (error) {
      console.log(error.message)
    }
  }

  // 1)Подключить popup окно "Прогресс засчитан"
  // 2)Передать completed : true если все тренировки 100%

  return (
    <S.Container>
      <S.Progress>
        <S.closeBtn onClick={() => setOpen(!open)}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>cross</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Icon-Set-Filled"
                  transform="translate(-469.000000, -1041.000000)"
                  fill="#b1aaaa"
                >
                  <path
                    d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                    id="cross"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </S.closeBtn>
        {okPopupOpen ? (
          <MyProgressPopup />
        ) : (
          <>
            <S.ProgressTitle>Мой прогресс</S.ProgressTitle>
            {
              <S.ProgressForm>
                {workout?.map((item, index) => (
                  <S.li key={index}>
                    <S.ProgressText>
                      Сколько раз вы сделали {item}
                    </S.ProgressText>
                    <S.ProgressInput
                      type="number"
                      placeholder="Введите значение"
                      onChange={(e) => handleInputChange(item, e.target.value)}
                    />
                  </S.li>
                ))}
              </S.ProgressForm>
            }
            <S.ProgressForButton>
              <S.ProgressButton onClick={() => handleSendResults()}>
                Отправить
              </S.ProgressButton>
            </S.ProgressForButton>
          </>
        )}
      </S.Progress>
    </S.Container>
  )
}
