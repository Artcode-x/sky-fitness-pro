import * as React from "react";
import "./App.css";
import { Profile } from "./pages/profile/profile";
import { ModalSelectWorkout } from "./components/modalSelectWorkout/selectWorkout";


function App() {
  return <div className='App'>
    <Profile/>
    <ModalSelectWorkout/>
  </div>;
}

export default App;