import { useState } from 'react'
import './App.css'
import Lottary from './lottary'
import Ticket from './Ticket'

function App() {
  return(
    <>  
      <Lottary n={3} WinningSum={15}/>
    </>
  )
}
export default App;
