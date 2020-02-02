import React from 'react'
import logo from './Bitcoin.svg'
import BtcTicker from './components/BtcTicker/BtcTicker'
import Transactions from './components/Transactions/Transactions'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      </header>
      <Transactions />
    </div>
  )
}

export default App
