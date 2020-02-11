import React from 'react'

import BtcTicker from './components/BtcTicker/BtcTicker'
import Transactions from './components/Transactions/Transactions'
import './App.css'

function App () {
  return (
    <div className='App'>


      <p>
        Edit 
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <BtcTicker />
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
      <Transactions />
    </div>
  )
}

export default App
