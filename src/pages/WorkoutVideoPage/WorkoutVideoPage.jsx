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

  const { id } = useParams()

  const selectedWorkout = data?.find((item) => item._id === id)

  const selectedWorkoutId = data.indexOf(selectedWorkout)

  const exercises = selectedWorkout?.exercises
  const exercisesNumber = selectedWorkout?.repeat
  console.log(exercisesNumber)
  const workout = selectedWorkout?.exercises_without
  const youtubeLink = selectedWorkout?.link_addition
  const link = `https://www.youtube.com/embed/${youtubeLink}`

  const [open, setOpen] = useState(false)

  const popup = () => {
    setOpen(!open)
  }

  const { id: userId } = useAuth()

  const calculatePercentage = (count, total) => {
    if (count >= total) {
      return 100
    } else {
      return Math.round((count / total) * 100)
    }
  }

  const getWorkoutResults = (workoutName) => {
    if (selectedWorkout?.users) {
      const userDBId = Object.keys(selectedWorkout?.users)[0]

      if (userDBId === userId) {
        const userWorkouts = Object.values(selectedWorkout.users)[0]

        if (userWorkouts.hasOwnProperty(workoutName)) {
          const result = userWorkouts[workoutName]

          return result
        }
      }
    }

    return 0
  }

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
                              <S.MainTextPercent>
                                {calculatePercentage(
                                  getWorkoutResults(item),
                                  exercisesNumber[index],
                                )}{' '}
                                %
                              </S.MainTextPercent>
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
