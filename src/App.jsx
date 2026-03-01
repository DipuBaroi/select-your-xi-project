import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch('./players.json')
  return res.json()
}


function App() {

  const playersPromise = fetchPlayer()
  return (
    <>

      <Navbar></Navbar>
      
      <Suspense fallback={<h2 className='text-center'>L O A D I N G <span className="loading loading-dots loading-xs"></span></h2>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
