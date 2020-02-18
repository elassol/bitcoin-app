import React, { useState, useEffect } from 'react';

import TickerPrice from './components/TickerPrice/TickerPrice';
import Transactions from './components/Transactions/Transactions';
import AppHeader from './components/AppHeader/AppHeader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import './App.css';

function App () {
  const [investment, setInvestment] = useState({});

  const initialState = {
    investment: null,
    btcHoldings: null,
    btcPrice: null
  };

  const investmentBTC = (array) => {
    array.reduce((a, b) => a + b, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <AppHeader />
        <TickerPrice />
        <p> </p>
        <Transactions/>
      </div>
    </ThemeProvider>
  )
}

export default App
