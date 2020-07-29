import React from 'react';
import styled, { css } from 'styled-components';
import { colors, darkTheme, lightTheme } from '../style/global.js';
import fb from '../images/icon-facebook.svg';
import insta from '../images/icon-instagram.svg';
import tw from '../images/icon-twitter.svg';
import yt from '../images/icon-youtube.svg';
import down from '../images/icon-down.svg';
import up from '../images/icon-up.svg';

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

const InlineIcon = styled.div`
    font-size: 0.9em;
    font-weight: 700;
    &::before{
        width: 20px;
        height: 20px;
        padding-right: 10px;
        vertical-align: middle;
    }
    ${({ iconName }) => iconName === 'facebook' && css`
        &::before{
            content:url(${fb});
        }
    `};
    ${({ iconName }) => iconName === 'instagram' && css`
        &::before{
            content:url(${insta});
        }
    `};
    ${({ iconName }) => iconName === 'twitter' && css`
        &::before{
            content:url(${tw});
        }
    `};
    ${({ iconName }) => iconName === 'youtube' && css`
        &::before{
            content:url(${yt});
        }
    `};
`;

const Item = styled.div`
    min-height: 230px; 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
    align-items: center;       
    background-color: ${darkTheme.darkBlue};

    ${({ theme }) => theme === 'dark' && css`

    `};
`;

const StatsItem = styled(Item)`
    min-height: 126px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 8px;
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

    ${({ brandColor }) => brandColor === 'facebook' && css`
        border-top: 6px solid ${ colors.facebook };
    `};
    ${({ brandColor }) => brandColor === 'instagram' && css`
        border-top: 6px solid; 
        border-image-slice: 1;
        border-width: 5px;
        border-radius: inherit;
        border-image-source: linear-gradient(45deg, ${colors.instagramGradientOne}, ${colors.instagramGradientTwo});
    `};
    ${({ brandColor }) => brandColor === 'twitter' && css`
        border-top: 6px solid ${ colors.twitter };
    `};
    ${({ brandColor }) => brandColor === 'youtube' && css`
        border-top: 6px solid ${ colors.youtube };
    `};


    ${({ theme }) => theme === 'dark' && css`
        background-color: ${ darkTheme.darkBlue };
        .follower-stats{
            color: ${ darkTheme.white };
        }
    `}
`;

const DashboardCardSmall = styled(DashboardCard)`
    border-top: none;
    min-height: 116px;
`;
function PlatformCard({info}){
    console.log("card", info);
    return(
        <DashboardCard brandColor={`${info.platform}`}>
            <Item>
                <InlineIcon iconName={`${info.platform}`} className="handler">{info.handle}</InlineIcon>
                <div className="follower-stats">{info.followers}</div>
                <div className="follower-label">followers</div>
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