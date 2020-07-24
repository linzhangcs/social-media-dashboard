import React, { useState } from 'react';
import socialMediaData from './data/socialMediaData.json';
import Dashboard from './components/Dashboard';
import DashboardHeader from './components/DashboardHeader';

import styled, { css } from 'styled-components';
import { darkTheme, lightTheme } from './style/global.js';

const statusData = socialMediaData;
const Body = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-item: center;
  font-size: 14px;

  ${({ theme }) => theme === 'dark' && css`
    color: ${darkTheme.white};
    background-color: ${darkTheme.veryDarkBlueBg};
  `}

  ${({ theme }) => theme === 'light' && css`
    color: ${lightTheme.darkBlueText};
    background-color: ${lightTheme.whiteBg};
  `}
`;

function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
      <Body theme={theme}>
        <DashboardHeader data={statusData}></DashboardHeader>
        <Dashboard data={statusData}></Dashboard>
      </Body>
  );
}

export default App;
