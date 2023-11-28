import React from 'react'
import * as S from './WorkoutVideoPage.styles'
import { Wrapper } from '../../index.styles'
import { MyProgress } from '../ProgressPage/MyProgress';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetWorkoutsQuery, useGetCoursesQuery } from 'services/courses';
import { workoutCourse } from 'components/modalSelectWorkout/selectWorkout.styles';
import { Header } from 'pages/profile/profile';
import './WorkoutVideoPage.css';

export const WorkoutVideoPage = () => {
  const { id } = useParams()



  const { data=[], isLoading, isError } = useGetWorkoutsQuery();
  console.log(data);
  console.log(data[0]);

  const selectedWorkout = data?.find((item) => item._id === id);
  
  const exercises = selectedWorkout?.exercises;
  const workout = selectedWorkout?.exercises_without;
  const youtubeLink = selectedWorkout?.link_addition
  const link = `https://www.youtube.com/embed/${youtubeLink}`


  const [open, setOpen] = useState(false);

  const popup = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  
  //   const sum = localStorage.getItem('firstProgress')
  //   const total = 15;
  //   let percent = sum/total;
  //   if (percent > 100) {
  //     percent = 100;
  //   }
  //   console.log(sum);

  //   const containerElement = document.getElementById('container');
    
    
  //   let newWidth = percent*268;

  //   containerElement.style.width = newWidth + 'px';
  
  // }, [MyProgress])
  
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
        <S.MainSmallHeading>

          {selectedWorkout.title}
        </S.MainSmallHeading>
        <S.MainVideoContainer>
          <iframe
            width="1160"
            height="639"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>

          </iframe>
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
            {open ? <MyProgress open={open} setOpen={setOpen} selectedWorkout={selectedWorkout} workout={workout}/> : null}
          </S.Exercise>
          <S.MainProgress>
            <S.ExerciseHeading>Мой прогресс по тренировке 2:</S.ExerciseHeading>
            <S.ProgressVisual>
              {<S.Visual>
                <S.ProgressText>{workout?.map((item, index) => {
              return (<S.li key={index}>{item}
            <S.VisualContainerFirst key={index}>
                  <S.InterVisualContainerFirst key={index} id="container">
                    <S.MainTextPercent >45%</S.MainTextPercent>
                  </S.InterVisualContainerFirst>
                </S.VisualContainerFirst>
            </S.li>
              )
          })}</S.ProgressText>
                
              </S.Visual>}

            </S.ProgressVisual>
          </S.MainProgress>
        </S.MainExercises>
        </>)}
      </main>
    </Wrapper>
  )
}
