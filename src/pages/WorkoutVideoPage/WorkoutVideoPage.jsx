import React from 'react'
import * as S from './WorkoutVideoPage.styles'
import { Wrapper } from '../../index.styles'
import { MyProgress } from '../ProgressPage/MyProgress';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetWorkoutsQuery, useGetCoursesQuery } from 'services/courses';
import { workoutCourse } from 'components/modalSelectWorkout/selectWorkout.styles';
import { Header } from 'pages/profile/profile';

export const WorkoutVideoPage = ({ course = '1', title = '' }) => {
  "Утренняя практика / Йога на каждый день / 1 день / Алексей Казубский"
  "Красота и здоровье/ Йога на каждый день / 2 день / Алексей Казубский"
  "Асаны стоя / Йога на каждый день / 3 день / Алексей Казубский"
  "Растягиваем мышцы бедра / Йога на каждый день / 4 день / Алексей Казубский"
  "Гибкость спины / Йога на каждый день / 5 день / Алексей Казубский"
  "Основы стретчинга"
  "Разогрев мышц"
  "Разогрев мышц 2.0"
  "Техника дыхания"
  "Тренировка мышц бедер"
  "Тренировка мышц ягодиц"
  "Основы"
  "Основные движения"
  "Новые движения"
  "Продвинутые движения"
  "Мастер-класс"
  "Степ-аэробика"
  "Основы"
  "Основные движения"
  "Новые движения"
  "Продвинутые движения"



  const { data=[], isLoading, isError } = useGetWorkoutsQuery();
  console.log(data);
  const workoutData = data[0] || [];
  const workoutName = workoutData[0] || [];
  const selectedWorkout = workoutData?.find((item) => item.title === "Асаны стоя / Йога на каждый день / 3 день / Алексей Казубский");
  const exercises = selectedWorkout?.exercises;
  const youtubeLink = selectedWorkout?.link_addition
  const link = `https://www.youtube.com/embed/${youtubeLink}`
  console.log(workoutData);
  console.log(selectedWorkout);
  console.log(youtubeLink);

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
       {isError ? (
          <S.TempErrorLoadingText>Ошибка: {error.data}</S.TempErrorLoadingText>
        ) : isLoading ? (
          <S.TempErrorLoadingText>...Загрузка</S.TempErrorLoadingText>
        ) : (
      <main>
        <S.MainBigHeading>{workoutName.name}</S.MainBigHeading>
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
            {open ? <MyProgress open={open} setOpen={setOpen} workoutData={workoutData} selectedWorkout={selectedWorkout} exercises={exercises}/> : null}
          </S.Exercise>
          <S.MainProgress>
            <S.ExerciseHeading>Мой прогресс по тренировке 2:</S.ExerciseHeading>
            <S.ProgressVisual>
              {<S.Visual>
                <S.ProgressText>{exercises?.map((item, index) => (
            <S.li key={index}>{item}
            <S.VisualContainerFirst>
                  <S.InterVisualContainerFirst id="container">
                    <S.MainTextPercent>45%</S.MainTextPercent>
                  </S.InterVisualContainerFirst>
                </S.VisualContainerFirst>
            </S.li>
          ))}</S.ProgressText>
                
              </S.Visual>}

            </S.ProgressVisual>
          </S.MainProgress>
        </S.MainExercises>
      </main>)}
    </Wrapper>
  )
}
