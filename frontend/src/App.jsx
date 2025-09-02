import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import {Routes,Route} from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

function App() {

  return (
    <div className='mainBody'>
      <Routes>
        <Route path="/" element={<SignUpPage/>}/>
        <Route path="/SignInPage" element={<SignInPage/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/cartPage' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App
