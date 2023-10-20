import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
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

    /* Tablet */
    @media (min-width: 768px) {
        & {
            padding: 0 26px;
            width: auto;

            transition: all 0.5s;

            border-radius: 31px;
        }

        & > div {
            margin: 0 8.5px;
        }
    }

    /* Desktop */
    @media (min-width: 1024px) {
        & {
            height: 65px;
            margin-bottom: 5px;
            border-radius: 14px;

            padding-left: 5px;
            padding-right: 5px;

        }

        & > div {
            margin: 0 1px;
        }
    }
`;

export const Dock = ({width}) => {

    const newTab = () => {
        // when click safari icon, open new tab
        window.open("https://www.apple.com", "_blank");
    }

    const [appsInfo] = useState([
        {
            name: "finder",
            type: "dock",
            func: () => { }
        },
        {
            name: "safari",
            type: "dock",
            func: newTab
        },
        {
            name: "mail",
            type: "dock",
            func: () => { }
        },
        {
            name: "music",
            type: "dock",
            func: () => {}
        },
    ])

    const constructApps = useCallback(() => {
        return appsInfo.map((app, index) => {
            return (
                <Icon
                    key={index}
                    name={app.name}
                    type={app.type}
                    func={app.func}
                />
            )
        })
    }, [appsInfo])

    const [geometry, setGeometry] = useState({
        width: 0,
        left: 0
    })

    useEffect(() => {
        console.log((40 * appsInfo.length + 12 * (appsInfo.length) + 8));
        let dockWidth, left;
        if (width > 1024) dockWidth = (40 * appsInfo.length + 12 * (appsInfo.length) + 8);
        else dockWidth = (60 * appsInfo.length + 17 * (appsInfo.length - 1) + 52);

        left = (width - width * 0.05 - dockWidth) / 2;

        setGeometry({
            width: dockWidth,
            left: left
        })
    }, [width])


    return (
        <StyledDock style={{width : geometry.width, left: geometry.left}}>
            {constructApps()}
        </StyledDock>
    );
}
