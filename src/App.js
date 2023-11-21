import * as React from 'react'
import { Profile } from './pages/profile/profile'
import { WorkoutInfoPage } from './pages/WorkoutInfoPage/WorkoutInfoPage'
import { GlobalStyle, Wrapper } from './index.styles'
import { AuthPage } from './pages/AuthPage/Auth'
import { MainPage } from './pages/MainPage/MainPage'
import { WorkoutVideoPage } from './pages/WorkoutVideoPage/WorkoutVideoPage'
function App() {
  return (
    <>
      {/* <MainPage /> */}
      <Wrapper>
        {/* <WorkoutInfoPage />
        <WorkoutVideoPage />
        <Profile /> */}
        <AuthPage/>
      </Wrapper>
    </>
  )
}

export default App
