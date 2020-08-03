import React, { useState } from 'react';
import socialMediaData from './data/socialMediaData.json';
import Dashboard from './components/Dashboard';
import DashboardHeader from './components/DashboardHeader';

import styled, { css } from 'styled-components';
import { darkTheme, lightTheme, breakpoints } from './style/global.js';

const statusData = socialMediaData;

const Wrapper = styled.div`
  height: 245px;
  width: 100%; 
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  ${({ theme }) => theme === 'dark' && css`
    background-color: ${darkTheme.veryDarkBlueBg};
  `}

  ${({ theme }) => theme === 'light' && css`
    background-color: ${lightTheme.paleBlue};
  `}
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  transition: background 0.6s ease;
  padding: 40px 0;

  ${({ theme }) => theme === 'dark' && css`
    color: ${darkTheme.white};
    background-color: ${darkTheme.veryDarkBlueBg};
  `}

  ${({ theme }) => theme === 'light' && css`
    color: ${lightTheme.darkBlueText};
    background-color: ${lightTheme.whiteBg};
  `}

  @media (min-width: ${breakpoints.mobile}){
    height: auto;
  }

  @media (min-width: ${breakpoints.desktop}){
    height: 100vh;
  }
`;

function App() {
  const [theme, setTheme] = useState('light');
  return (
        <AppContainer theme={theme}>
          <Wrapper theme={theme}></Wrapper>
          <DashboardHeader theme={theme} setTheme={setTheme} data={statusData}></DashboardHeader>
          <Dashboard theme={theme} data={statusData}></Dashboard>
        </AppContainer>
  );
}

export default App;
