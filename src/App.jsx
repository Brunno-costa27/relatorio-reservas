import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { ReservationsCompleted } from './components/ReservationsCompleted'
import { Cancellations } from './components/Cancellations'
import { ReservationsByRoomCategory } from './components/ReservationsByRoomCategory'
import { ReservationsByOrigin } from './components/ReservationsByOrigin'
import { ReservationsInDetail } from './components/ReservationsInDetail'



function App() {

  return (
    <>
        <Header />
        <ReservationsCompleted />
        <Cancellations />
        <ReservationsByRoomCategory />
        <ReservationsByOrigin />
        <ReservationsInDetail/>
    </>
  )
}

export default App
