import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COURSES_TAG = { type: 'Courses', id: 'LIST' }

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://sky-fitness-pro-abc-default-rtdb.asia-southeast1.firebasedatabase.app/',
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
    addCourses: build.mutation({
      query: () => ({
        url: 'courses.json/userCourses',
        method: 'PATCH',
      }),
    }),
  }),
})

export const { useGetCoursesQuery, useGetWorkoutsQuery, useAddCoursesMutation } = coursesApi
