import { createSlice } from '@reduxjs/toolkit'

const AUTH_DATA = 'fitness-pro'

function getUserFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_DATA))
  } catch (error) {
    console.error(error)
    return null
  }
}

const initialState = {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromLocalStorage() ?? initialState,
  reducers: {
    setUser(state, action) {
      const payload = action.payload ?? initialState
      state.email = payload.email
      state.token = payload.token
      state.id = payload.id
      localStorage.setItem(AUTH_DATA, JSON.stringify(state))
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      localStorage.removeItem(AUTH_DATA)
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
