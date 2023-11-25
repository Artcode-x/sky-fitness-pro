import React from 'react'
import * as S from './WorkoutVideoPage.styles'
import { Wrapper } from '../../index.styles'
import { MyProgress } from '../ProgressPage/MyProgress';
import { useState } from 'react';
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
  const workoutData = data[1];
  const selectedWorkout = workoutData.find((item) => item.title === 'Разогрев мышц 2.0');
  const exercises = selectedWorkout?.exercises;
  // console.log(data[1]);
  console.log(workoutData);
  console.log(selectedWorkout);

  const [open, setOpen] = useState(false);

  const popup = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
       <Header></Header>
      <main>
        <S.MainBigHeading>{workoutData[0].name}</S.MainBigHeading>
        <S.MainSmallHeading>
          {/* {' '}
          Красота и здоровье / Йога на каждый день / 2 день */}
          {selectedWorkout.title}
        </S.MainSmallHeading>
        <S.MainVideoContainer>
          <iframe
            width="1160"
            height="639"
            src="https://www.youtube.com/embed/v-xTLFDhoD0?si=VodWNwqcr_f8ARK2"
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

              {/* <S.MainLi>Наклон вперед (10 повторений)</S.MainLi>
              <S.MainLi>Наклон назад (10 повторений)</S.MainLi>
              <S.MainLi>
                Поднятие ног, согнутых в коленях (5 повторений)
              </S.MainLi> */}
            </S.MainUl>
            <S.Button onClick={popup}>Заполнить свой прогресс</S.Button>
            {open ? <MyProgress/> : null}
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
              {/* <S.Visual>
                <S.ProgressText>Наклоны вперед</S.ProgressText>
                <S.VisualContainerFirst>
                  <S.InterVisualContainerFirst id="container">
                    <S.MainTextPercent>45%</S.MainTextPercent>
                  </S.InterVisualContainerFirst>
                </S.VisualContainerFirst>
              </S.Visual>
              <S.Visual>
                <S.ProgressText>Наклоны назад</S.ProgressText>
                <S.VisualContainerSecond>
                  <S.InterVisualContainerSecond>
                    <S.MainTextPercent>45%</S.MainTextPercent>
                  </S.InterVisualContainerSecond>
                </S.VisualContainerSecond>
              </S.Visual>
              <S.Visual>
                <S.ProgressText>
                  Поднятие ног, согнутых в коленях
                </S.ProgressText>
                <S.VisualContainerThird>
                  <S.InterVisualContainerThird>
                    <S.MainTextPercent>45%</S.MainTextPercent>
                  </S.InterVisualContainerThird>
                </S.VisualContainerThird>
              </S.Visual> */}
            </S.ProgressVisual>
          </S.MainProgress>
        </S.MainExercises>
      </main>
    </Wrapper>
  )
}
