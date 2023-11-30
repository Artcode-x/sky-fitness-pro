import { Link } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import * as S from './selectWorkout.styles'
import { useGetWorkoutsQuery } from 'services/courses'

const Workout = ({ name, course, day, done }) => {
  return (
    <S.workoutsListItem $isDone={done}>
      <S.doneIcon>
        {done && (
          <svg
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="13.5" r="11.5" stroke="#06B16E" />
            <path d="M6 9.81034L11.775 15.5L27 0.5" stroke="#06B16E" />
          </svg>
        )}
      </S.doneIcon>
      <S.workoutName>{name}</S.workoutName>
      <S.workoutCourse>
        {course} / {day}
      </S.workoutCourse>
    </S.workoutsListItem>
  )
}

export const ModalSelectWorkout = ({ modalIsOpen, closeModal }) => {
  const { id: userId } = useAuth()
  const { data, isLoading, error } = useGetWorkoutsQuery()
  console.log(data)

  const getResults = (names, plan, fact) => {
    const userResults = (fact && userId in fact)? fact[userId] : null
    const resultArr = names.map((item, index) => (userResults)? userResults[item] / plan[index] : 0)
    return (resultArr.every(result => { return result >= 1}))
  }

  const preparedArr = data
    ?.filter((item) => item.name == modalIsOpen)
    .map((item) => ({
      id: item._id,
      name: item.title.split(' / ')[0],
      course: item.title.split(' / ')[1],
      day: item.title.split(' / ')[2],
      done: getResults(item.exercises_without, item.repeat, item.users)
    }))

  return (
    <S.modalBG>
      <S.selectWorkout>
        <S.closeBtn onClick={() => closeModal('')}>
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
        <S.selectWorkoutTitle>Выберите тренировку</S.selectWorkoutTitle>
        <S.workoutsList>
          {preparedArr?.map((item) => (
            <Link key={item.id} to={`/workout-video-page/${item.id}`}>
              <Workout name={item.name} course={item.course} day={item.day} done={item.done}/>
            </Link>
          ))}
        </S.workoutsList>
      </S.selectWorkout>
    </S.modalBG>
  )
}
