import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { HeaderWrapper } from './AppHeader.style';

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <Logo className='App-logo' alt='logo' />
      <h1>online portfolio tracker</h1>
    </HeaderWrapper>
  )
}

export default AppHeader;