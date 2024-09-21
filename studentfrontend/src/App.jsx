import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Appbar'
import Student from './components/Student'

function App() {
  

  return (
    <div className="App">
      <Appbar/>
      <Student/>
    </div>
  );
}

export default App
