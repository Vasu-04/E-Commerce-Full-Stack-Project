import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import {Routes,Route} from 'react-router-dom'
import SignInPage from './pages/SignInPage'

function App() {

  return (
    <>
      {/* <div>
        <SignUpPage/>
      </div> */}
      <Routes>
        <Route path="/" element={<SignUpPage/>}/>
        <Route path="/SignInPage" element={<SignInPage/>}/>
      </Routes>
    </>
  )
}

export default App
