import React from 'react'
import * as S from './WorkoutVideoPage.styles'
import { Wrapper } from '../../index.styles'
import { MyProgress } from '../ProgressPage/MyProgress'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetWorkoutsQuery } from 'services/courses'
import { Header } from 'pages/profile/profile'
import { useAuth } from 'hooks/use-auth'

export const WorkoutVideoPage = () => {
  const { data = [], isLoading, isError, error } = useGetWorkoutsQuery()
  console.log(data)
  console.log(data[0])

  const { id } = useParams()

  const selectedWorkout = data?.find((item) => item._id === id)

  const selectedWorkoutId = data.indexOf(selectedWorkout)
  console.log(selectedWorkoutId)

  // РАЗДЕЛЕНИЕ СТРОКИ НА ДО И ПОСЛЕ (). Останется только подкрутить стили!

  // let stringArray = selectedWorkout?.exercises[0].match(/\(([^)]+)\)/)
  // console.log(stringArray)
  // let beforeParentheses = selectedWorkout?.exercises[0]
  //   .substring(0, stringArray.index)
  //   .trim()
  // console.log(beforeParentheses)
  // let afterParentheses = stringArray[0]
  // console.log(afterParentheses)
  // const findString = (string) => {
  //   let stringArray = string.match(/\(([^)]+)\)/)
  //   let beforeParentheses = string.substring(0, stringArray.index).trim()
  //   return beforeParentheses
  // }
  //       КОНЕЦ

  const exercises = selectedWorkout?.exercises
  const workout = selectedWorkout?.exercises_without
  const youtubeLink = selectedWorkout?.link_addition
  const link = `https://www.youtube.com/embed/${youtubeLink}`

  const [open, setOpen] = useState(false)

  const popup = () => {
    setOpen(!open)
  }

  const getUserId = (userId) => {
    const { id } = useAuth()
    return (userId = id)
  }
  const userId = getUserId()

  const getProgressItemsFromDb = () => {
    if (selectedWorkout?.users) {
      const userProgress = Object.keys(selectedWorkout?.users)[0]
      if (userProgress === userId) {
        const progressArray = Object.values(
          Object.values(selectedWorkout?.users)[0],
        )
        return progressArray
      }
    }
  }

  const progress = getProgressItemsFromDb()
  console.log(progress)

  return (
    <Wrapper>
      <Header></Header>
      <main>
        {isError ? (
          <S.TempErrorLoadingText>Ошибка: {error.data}</S.TempErrorLoadingText>
        ) : isLoading ? (
          <S.TempErrorLoadingText>...Загрузка</S.TempErrorLoadingText>
        ) : (
          <>
            <S.MainBigHeading>{selectedWorkout.name}</S.MainBigHeading>
            <S.MainSmallHeading>{selectedWorkout.title}</S.MainSmallHeading>
            <S.MainVideoContainer>
              <iframe
                width="1160"
                height="639"
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </S.MainVideoContainer>
            <S.MainExercises>
              <S.Exercise>
                <S.MainSmallHeading>Упражнения</S.MainSmallHeading>
                <S.MainUl>
                  {exercises?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </S.MainUl>
                <S.Button onClick={popup}>Заполнить свой прогресс</S.Button>
                {open ? (
                  <MyProgress
                    open={open}
                    setOpen={setOpen}
                    selectedWorkout={selectedWorkout}
                    workout={workout}
                    selectedWorkoutId={selectedWorkoutId}
                  />
                ) : null}
              </S.Exercise>
              <S.MainProgress>
                <S.ExerciseHeading>
                  Мой прогресс по тренировке 2:
                </S.ExerciseHeading>
                <S.ProgressVisual>
                  {
                    <S.Visual>
                      {workout?.map((item, index) => (
                        <S.li key={index}>
                          <S.ProgressText>{item}</S.ProgressText>
                          <S.VisualContainerFirst key={index}>
                            <S.InterVisualContainerFirst
                              key={index}
                              id="container"
                            >
                              <S.MainTextPercent>{progress}</S.MainTextPercent>
                            </S.InterVisualContainerFirst>
                          </S.VisualContainerFirst>
                        </S.li>
                      ))}
                    </S.Visual>
                  }
                </S.ProgressVisual>
              </S.MainProgress>
            </S.MainExercises>
          </>
        )}
      </main>
    </Wrapper>
  )
}
