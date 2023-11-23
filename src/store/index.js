import { configureStore } from '@reduxjs/toolkit'
import { coursesApi } from 'services/courses'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
})
