import React from 'react'
import * as S from './WorkoutVideoPage.styles'

export const WorkoutVideoPage = () => {
  return (
    <>
      <S.Header>
        <img src="/img/logo.svg" alt="logo"></img>
        <S.HeaderUserInfo>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
          </svg>

          <S.MainText>Сергей</S.MainText>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
              stroke="black"
            />
          </svg>
        </S.HeaderUserInfo>
      </S.Header>
      <main>
        <S.MainBigHeading>Йога</S.MainBigHeading>
        <S.MainSmallHeading>
          {' '}
          Красота и здоровье / Йога на каждый день / 2 день
        </S.MainSmallHeading>
        <S.MainVideoContainer>
          <iframe
            width="1160"
            height="639"
            src="https://www.youtube.com/embed/v-xTLFDhoD0?si=VodWNwqcr_f8ARK2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </S.MainVideoContainer>
        <S.MainExercises>
          <S.Exercise>
            <S.MainSmallHeading>Упражнения</S.MainSmallHeading>
            <S.MainUl>
              <S.MainLi>Наклон вперед (10 повторений)</S.MainLi>
              <S.MainLi>Наклон назад (10 повторений)</S.MainLi>
              <S.MainLi>
                Поднятие ног, согнутых в коленях (5 повторений)
              </S.MainLi>
            </S.MainUl>
            <S.Button>Заполнить свой прогресс</S.Button>
          </S.Exercise>
          <S.MainProgress>
            <S.ExerciseHeading>Мой прогресс по тренировке 2:</S.ExerciseHeading>
            <S.ProgressVisual>
              <S.Visual>
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
              </S.Visual>
            </S.ProgressVisual>
          </S.MainProgress>
        </S.MainExercises>
      </main>
    </>
  )
}
