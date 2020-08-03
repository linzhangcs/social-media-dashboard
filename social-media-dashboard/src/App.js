import React, { useState } from 'react';
import socialMediaData from './data/socialMediaData.json';
import Dashboard from './components/Dashboard';
import DashboardHeader from './components/DashboardHeader';

import styled, { css } from 'styled-components';
import { darkTheme, lightTheme } from './style/global.js';

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
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  transition: background 0.6s ease;

  ${({ theme }) => theme === 'dark' && css`
    color: ${darkTheme.white};
    background-color: ${darkTheme.veryDarkBlueBg};
    .dashboard-header{
      // background-color: ${darkTheme.white};
    }  
  `}

  ${({ theme }) => theme === 'light' && css`
    color: ${lightTheme.darkBlueText};
    background-color: ${lightTheme.whiteBg};
  `}

`;

function App() {
  const [theme, setTheme] = useState('dark');
  return (
        <AppContainer theme={theme}>
          <Wrapper theme={theme}></Wrapper>
          <DashboardHeader theme={theme} setTheme={setTheme} data={statusData}></DashboardHeader>
          <Dashboard theme={theme} data={statusData}></Dashboard>
        </AppContainer>
  );
}

export default App;
