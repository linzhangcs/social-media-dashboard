import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Dashboard from './Dashboard';
import { colors, darkTheme, lightTheme, breakpoints } from '../style/global.js';

const Header = styled.div`
    box-sizing: border-box;
    // min-height: 245px;
    display: flex;
    flex-direction: row;
    // position: relative;
    // padding: 40px calc((162 / 1440) * 100%) 0;
    width: calc( (1 - (162 / 1440)*2) * 100%);
    justify-content: space-between;
    align-items: top;
    text-transform: capitalize;
    transition: background-color 600ms ease-in-out;
    z-index: 2;

    h2{
        margin-top: 0;
        margin-bottom: 12px;
    }
    .followers-number, .theme-toggle-wrapper{
        font-weight: 700;
    }

    ${({ theme }) => theme === 'dark' && css`
        .followers-number{
            color: ${darkTheme.blueText};
        }
    `}

    ${({ theme }) => theme === 'light' && css`
        .followers-number{
            color: ${lightTheme.darkGreyText};
        }
    `}

    @media (max-width: ${breakpoints.mobile}){
        flex-direction: column;
        
        ${({ theme }) => theme === 'light' && css`
            .theme-toggle-wrapper{
                border-top: 1px solid ${lightTheme.darkGreyLine};
            }
        `};

        ${({ theme }) => theme === 'dark' && css`
            .theme-toggle-wrapper{
                border-top: 1px solid ${darkTheme.blueText};
            }
        `};
    }
`;

const ThemeToggle = styled.span`
    cursor: pointer;
    margin: 0 12px;
    &::before, &::after{
        content: '';
        transition: all 900ms ease;
        display: block;
        background: white;
        margin: 0 3px;
    }

    &::before{
        height: 24px;
        width: 50px;
        border-radius: 1em;
        opacity: 0.8;
        ${({ theme }) => theme === 'dark' && css`
            background: linear-gradient(45deg, ${darkTheme.toggleGradientOne}, ${darkTheme.toggleGradientTwo});
        `}

        ${({ theme }) => theme === 'light' && css`
            background: ${lightTheme.toggleBg};
        `}
    }

    &::after{
       position: absolute;
       transform: translate(calc(47px - 100%), -120%);

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
    justify-content: space-between;

    [type=checkbox]{
        position: absolute;
        pointer-events: none;
        opacity: 0;
    }
    [type=checkbox]:checked+${ThemeToggle}::after{
        transform: translate(22%, -120%);
    }
    ${({ theme }) => theme === 'dark' && css`
    color: ${darkTheme.blueText}
    `}

    ${({ theme }) => theme === 'light' && css`
        color: ${lightTheme.darkGrayishBlueText};
    `}
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
                <div>Dark Mode</div>
                <div>
                    <input type="checkbox" onChange={themeToggleHandler}/>
                    <ThemeToggle theme={theme}></ThemeToggle>
                </div>
            </ThemeSwitch>
        </div>

    </Header>
    );
}

export default DashboardHeader;