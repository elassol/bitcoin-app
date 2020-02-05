import React from 'react';
import logo from './Bitcoin.svg'
import HeaderWrapper from './AppHeader.style'

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <img src={logo} className='App-logo' alt='logo' />
      <h1>online portfolio tracker</h1>
    </HeaderWrapper>
  )
}

export default AppHeader;