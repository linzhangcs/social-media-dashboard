import React from 'react';
import styled from 'styled-components';
import { colors, darkTheme, lightTheme } from '../style/global.js';

const DashboardGrid = styled.div`
    position: absolute;
    top: 136px;
    left: 162px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    .item{
        min-width: 254.1px;
        min-height: 230px; 
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 0 0 10px 10px;
        align-items: center;       
        background-color: ${ darkTheme.darkBlue};
    }
`;

const DashboardCard = styled.div`
    min-width: 255px;
    min-height: 220px;
    background-color: ${ darkTheme.darkBlue };
    border-radius: 10px;
    border-top: 6px solid ${ colors.facebook };
`;

function PlatformCard({info}){
    console.log("card", info);
    return(
        <DashboardCard>
            <div className="item">{info.handle}</div>

        </DashboardCard>
    );
}
function Dashboard({theme, data}) {
    return(
      <DashboardGrid>
        {data.socialMedia.map((platform) => 
            <PlatformCard className="item" info={platform}></PlatformCard>
        )}
        
      </DashboardGrid>
    );
} 

export default Dashboard;