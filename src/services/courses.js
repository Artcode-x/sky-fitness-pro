import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COURSES_TAG = { type: 'Courses', id: 'LIST' }

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
    addCourses: build.mutation({
      query: () => ({
        url: 'courses.json/userCourses',
        method: 'PATCH',
      }),
    }),
    addCourseToUser: build.mutation({
      query: ({courseIndex, id}) => ({
        url: `courses/${courseIndex}/users.json`,
        method: 'POST',
        // headers: {
        //   'content-type': 'application/json',
        // },
        body: id,
      }),
    }),
  }),
})

export const {
  useGetCoursesQuery,
  useGetWorkoutsQuery,
  useAddCoursesMutation,
  useAddCourseToUserMutation
} = coursesApi
