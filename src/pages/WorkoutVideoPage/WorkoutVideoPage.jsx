import React from 'react'
import * as S from './WorkoutVideoPage.styles'
import { Wrapper } from '../../index.styles'
import { MyProgress } from '../ProgressPage/MyProgress'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetWorkoutsQuery } from 'services/courses'
import { Header } from 'pages/profile/profile'
import { useAuth } from 'hooks/use-auth'
import { calculatePercentage } from 'pages/WorkoutInfoPage/utils/calculatePercent'
import { Loader } from 'components/loader/Loader'

const progressColors = ['#565EEF', '#FF6D00', '#9A48F1']

export const WorkoutVideoPage = () => {
  const { data = [], isLoading, isError, error } = useGetWorkoutsQuery()

  const { id } = useParams()

  const selectedWorkout = data?.find((item) => item._id === id)
  const selectedWorkoutId = data.indexOf(selectedWorkout)

  const exercises = selectedWorkout?.exercises
  const exercisesNumber = selectedWorkout?.repeat
  const workout = selectedWorkout?.exercises_without
  const youtubeLink = selectedWorkout?.link_addition
  const link = `https://www.youtube.com/embed/${youtubeLink}`

  const [open, setOpen] = useState(false)

  const popup = () => {

    setOpen(!open)
  }

  const { id: userId } = useAuth()

  const getWorkoutResults = (workoutName) => {
    if (selectedWorkout?.users) {
      const userDBId = Object.keys(selectedWorkout?.users).find(
        (id) => id === userId,
      )
      const userWorkouts = selectedWorkout?.users[userDBId]
      if (userWorkouts?.hasOwnProperty(workoutName)) {
        const result = userWorkouts[workoutName]

        return result
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
          <Loader />
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
                          <S.VisualContainerFirst key={index} $colors={
                                progressColors[index % progressColors.length]
                              }>
                            <S.InterVisualContainerFirst
                              $percent={calculatePercentage(
                                getWorkoutResults(item),
                                exercisesNumber[index],
                              )}
                              key={index}
                              id="container"
                              $colors={
                                progressColors[index % progressColors.length]
                              }
                            >
                              <S.MainTextPercent>
                                {calculatePercentage(
                                  getWorkoutResults(item),
                                  exercisesNumber[index],
                                )}
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
