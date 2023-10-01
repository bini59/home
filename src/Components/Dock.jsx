import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "./Icon";

const StyledDock = styled.div`

    position: absolute;
    bottom: 0;
    width: 95%;
    border-radius: 41px;
    height: 98px;

    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 12px;
    margin-bottom: 12px;

    padding-left : 5.5%;
    padding-right : 5.5%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background-color: #bfbfbf70;

    backdrop-filter: blur(10px); 
    
    & > div {
        margin: 0 4.05%;
    }

    & > div:first-child {
        margin-left: 0;
    }
    & > div:last-child {
        margin-right: 0;
    }
`;

export const Dock = () => {

    const newTab = () => {
        // when click safari icon, open new tab
        window.open("https://www.apple.com", "_blank");
    }

    return (
        <StyledDock>
            <Icon name="finder" type="dock" />
            <Icon name="safari" type="dock" func={newTab} />
            <Icon name="mail" type="dock" />
            <Icon name="music" type="dock" />
        </StyledDock>
    );
}
