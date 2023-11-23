export async function getCourses() {
  const response = await fetch(
    'https://fitness-pro-21689-default-rtdb.europe-west1.firebasedatabase.app/courses.json',
  )

  if (!response.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  const data = await response.json()
  console.log(data)
  return data
}

export async function getWorkouts() {
  const response = await fetch(
    'https://fitness-pro-21689-default-rtdb.europe-west1.firebasedatabase.app/workouts.json',
  )

  if (!response.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  const data = await response.json()
  console.log(data)
  return data
}
