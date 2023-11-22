import * as React from 'react'
import { Profile } from './pages/profile/profile'
import { AppRoutes } from './routes'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);


  return (
    <>
      <AppRoutes user = {user}/>
    </>
  )
}

export default App;

