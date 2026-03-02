import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayer = async () => {
  const res = await fetch('./players.json')
  return res.json()
}

const playersPromise = fetchPlayer()
function App() {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(6000000)
  const [purchasedPlayer, setPurchasedPlayer] = useState([])



  return (
    <>

      <Navbar availableBalance={availableBalance}></Navbar>
      <section className='w-11/12 mx-auto flex justify-between items-center'>
        <h3 className='font-bold text-2xl'>{toggle? 'Available Players' : 'Selected Players ( 4 / 6 )'}</h3>
        <div className='flex font-semibold'>
          <button onClick={() => setToggle(true)} className={`border border-gray-400 py-3 px-5 rounded-l-2xl border-r-0 ${toggle === true ? ' bg-[#E7FE29]' : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`border border-gray-400 py-3 px-5 rounded-r-2xl border-l-0 ${toggle === false ? ' bg-[#E7FE29]' : ''}`}>Selected <span>(0)</span></button>
        </div>
      </section>
      {
        toggle === true ? <Suspense fallback={<h2 className='text-center'>L O A D I N G <span className="ml-3 loading loading-spinner loading-md"></span></h2>}>
          <AvailablePlayers
            playersPromise={playersPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
          ></AvailablePlayers>
        </Suspense> : <SelectedPlayers
          purchasedPlayer={purchasedPlayer}
        ></SelectedPlayers>
      }
    </>
  )
}

export default App
