import * as React from "react";
// import "./App.css";
import { Profile } from "./pages/profile/profile";
import {WorkoutVideoPage} from "./pages/WorkoutVideoPage/workout-video-page";


function App() {
  return <div className='App'>
    <Profile/>
    <WorkoutVideoPage/>
  </div>;
}

export default App;