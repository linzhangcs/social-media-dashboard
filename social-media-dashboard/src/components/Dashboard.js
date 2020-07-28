import React from 'react';
import styled, { css } from 'styled-components';
import { colors, darkTheme, lightTheme } from '../style/global.js';

const DashboardGrid = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: calc( (1 - (162 / 1440)*2) * 100%);
    top: 136px;
    left: calc((162 / 1440) * 100%);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    .overview-title{
        grid-column: 1/5;
        grid-row: 2/3;
        text-transform: capitalize;
    }
`;
const Item = styled.div`
    min-height: 230px; 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
    align-items: center;       
    background-color: ${ darkTheme.darkBlue};
`;

const StatsItem = styled(Item)`
    min-height: 126px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-evenly;
    align-items: space-evenly;
    div{
        box-sizing: border-box;
        flex: 0 50%;
        padding-left: 26px;
    }
    .platform, .stats-changes{
        text-align: right;
        padding-right: 26px;
    }
`;  

const DashboardCard = styled.div`
    min-height: 220px;
    background-color: ${ darkTheme.darkBlue };
    border-radius: 10px;
    border-top: 6px solid ${ colors.facebook };

    .follower-stats{
        font-size: 3.5em;
        font-weight: 700;
    }

    ${({ theme }) => theme === 'dark' && css`
        background-color: ${ darkTheme.darkBlue };
        .follower-stats{
            color: ${ darkTheme.white };
        }
    `}
`;

const DashboardCardSmall = styled(DashboardCard)`
    min-height: 116px;
`;
function PlatformCard({info}){
    console.log("card", info);
    return(
        <DashboardCard>
            <Item>
                <div className="handler">{info.handle}</div>
                <div className="follower-stats">{info.followers}</div>
                <div className="stats-changes">{info.changes}</div>
            </Item>
        </DashboardCard>
    );
}

function OverviewCard({stats}){
    console.log("stats", stats);

    return(
        <DashboardCardSmall>
            <StatsItem>
                <div className="title">{stats.measurement}</div>
                <div className="platform">{stats.platform}</div>
                <div className="stats">{stats.enagement}</div>
                <div className="stats-changes">{stats.enagementChanges}</div>
            </StatsItem>
        </DashboardCardSmall>
    );
}
function Dashboard({theme, data}) {
    return(
      <DashboardGrid>
        {   data.socialMedia.map((platform) => 
                <PlatformCard className="item" info={platform}></PlatformCard>
            )}

        <h3 className="overview-title">
            overview - today
        </h3>
        {data.dailyOverview.map((stats) => 
                <OverviewCard className="stats-item" stats={stats}></OverviewCard>
            )
        }
        
      </DashboardGrid>
    );
} 

export default Dashboard;