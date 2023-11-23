import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-pro-21689-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: (build) => ({
    getCourses: build.query({
      query: () => ({
        url: 'courses.json',
      }),
    }),
    getWorkouts: build.query({
        query: () => ({
          url: 'workouts.json',
        }),
      }),
  }),
})

export const { useGetCoursesQuery, useGetWorkoutsQuery } = coursesApi
