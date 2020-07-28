import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Dashboard from './Dashboard';
import { colors, darkTheme, lightTheme } from '../style/global.js';

const Header = styled.div`
    box-sizing: border-box;

    min-height: 245px;
    display: flex;
    position: relative;
    padding: 40px calc((162 / 1440) * 100%) 0;
    justify-content: space-between;
    align-items: top;
    text-transform: capitalize;
    h2{
        margin-top: 0;
        margin-bottom: 12px;
    }
    .followers-number, .theme-toggle-wrapper{
        font-weight: 700;
    }
    ${({ theme }) => theme === 'dark' && css`
        background-color: ${darkTheme.veryDarkBlueTopBg};
        // background-color: ${darkTheme.toggleGradientOne};

        .followers-number{
            color: ${darkTheme.blueText};
        }

    `}
`;

const ThemeToggle = styled.span`
    cursor: pointer;
    margin: 0 12px;
    &::before, &::after{
        content: '';
        transition: all 300ms linear;
        display: block;
        background: white;
        margin: 0 3px;
    }

    &::before{
        height: 24px;
        width: 50px;
        border-radius: 1em;
        opacity: 0.8;
        background: linear-gradient(45deg, ${darkTheme.toggleGradientOne}, ${darkTheme.toggleGradientTwo});
    }

    &::after{
       position: absolute;
       transform: translate(22%, -120%);
       height: 18px;
       width: 18px; 
       border-radius: 50%;
       ${({ theme }) => theme === 'dark' && css`
       background: ${darkTheme.darkBlue};
       `}

       ${({ theme }) => theme === 'light' && css`
       background: ${lightTheme.whiteBg};
       `}

    }
`;

const ThemeSwitch = styled.label`
    display: flex;
    align-items: center;

    [type=checkbox]{
        position: absolute;
        pointer-events: none;
        opacity: 0;
    }
    [type=checkbox]:checked+${ThemeToggle}::after{
        transform: translate(calc(47px - 100%), -120%);
    }
`;

function DashboardHeader({theme, setTheme, data}){

    const themeToggleHandler = event => {
        console.log("toggled", event.target.checked)
        const theme = event.target.checked ? 'dark' : 'light';
        setTheme(theme);
    };

    return(
    <Header theme={theme}>
        <div>
            <h2>social media dashboard</h2>
            <p className="followers-number">total followers: {data.totalFollowersNumber}</p>
        </div>
        <div className="theme-toggle-wrapper">
            <ThemeSwitch theme={theme}>
                Dark Mode
                <input type="checkbox" onChange={themeToggleHandler}/>
                <ThemeToggle theme={theme}></ThemeToggle>
            </ThemeSwitch>
        </div>

    </Header>
    );
}

export default DashboardHeader;