import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/dollar.png'

function App() {
  

  return (
    <>
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className=" w-[60px] h-[60px] " src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <span>6000000000</span>
          <span>coin</span>
          <img className='w-4 h-4 rounded-full' src={dollarImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
