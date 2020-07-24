import React, { useState } from 'react';
import socialMediaData from './data/socialMediaData.json';
import Dashboard from './components/Dashboard';
import DashboardHeader from './components/DashboardHeader';

import styled from 'styled-components';
import { darkTheme, lightTheme } from './style/global.js';

const statusData = socialMediaData;
const Body = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-item: center;
  color: ${darkTheme.white};
  background-color: ${darkTheme.veryDarkBlueBg};
  font-size: 14px;
`;

function App() {
  return (
      <Body>
        <DashboardHeader></DashboardHeader>
        <Dashboard data={statusData}></Dashboard>
      </Body>
  );
}

export default App;
