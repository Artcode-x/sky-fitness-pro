import * as S from "./selectWorkout.styles"

export const ModalSelectWorkout = () => {
    return(
<S.modalBG>
    <S.selectWorkout>
        <S.selectWorkoutTitle>Выберите тренировку</S.selectWorkoutTitle>
        <S.workoutsList>
            <S.workoutsListItem $isDone>
                <S.workoutName>Утренняя практика</S.workoutName>
                <S.workoutCourse>Йога на каждый день / 1 день </S.workoutCourse>
            </S.workoutsListItem>
            <S.workoutsListItem $isDone>
                <S.workoutName>Красота и здоровье</S.workoutName>
                <S.workoutCourse>Йога на каждый день / 2 день </S.workoutCourse>
            </S.workoutsListItem>
            <S.workoutsListItem>
                <S.workoutName>Асаны стоя</S.workoutName>
                <S.workoutCourse>Йога на каждый день / 3 день </S.workoutCourse>
            </S.workoutsListItem>
            <S.workoutsListItem>
                <S.workoutName>Растягиваем мышцы бедра</S.workoutName>
                <S.workoutCourse>Йога на каждый день / 4 день </S.workoutCourse>
            </S.workoutsListItem>
            <S.workoutsListItem>
                <S.workoutName>Гибкость спины</S.workoutName>
                <S.workoutCourse>Йога на каждый день / 5 день </S.workoutCourse>
            </S.workoutsListItem>

        </S.workoutsList>
    </S.selectWorkout>
</S.modalBG>
    )
}