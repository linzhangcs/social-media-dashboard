import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardGrid = styled.div`

`;
function Dashboard({data}) {
    console.log(data);
    return(
      <>
      <div>Dashboard</div>
      <p>{data.totalFollower}</p>
      </>
    );
}

export default Dashboard;