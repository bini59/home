import React from 'react'
import styled from 'styled-components'

import { useTime } from '../hooks/useTime'

import control from "../assets/icons/control.svg" 
import search from "../assets/icons/search.svg"
import apple from "../assets/icons/apple.svg"


const StyledStatus = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 27px;
    display: none;
    /* Desktop */
    @media (min-width: 1024px) {
        & {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff7f;
        }

        & > div:first-child{
            margin-left: 4px;
        }
    }
`

const StyledStatusItem = styled.div`
    font-weight: 600;
    font-size: 14px;

    display: flex;
    height: 100%;
    align-items: center;

    

    & > div {
        padding: 0 9px;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 4px;
        user-select: none;
    }

    & > div:hover{
        
        background-color: #ffffff3f;
    }

`

const RightItem = () => {
    const [date, time] = useTime();

    return (
        <>
            <StyledStatusItem>
                <div className='search'><img src={search} alt="search" /></div>
                <div className='control' id="controlPanelActive"><img src={control} alt="control"/></div>
                <div className='time'>{date} {time}</div>
            </StyledStatusItem>
        </>
    )
}

const LeftItem = () => {
    return (
        <StyledStatusItem>
            <div className='apple' style={{ marginLeft: "3px" }}><img src={apple} width={16.3} alt="apple"/></div>
            <div className='finder'>Finder</div>
            <div>File</div>
            <div>Edit</div>
            <div>View</div>
            <div>Go</div>
            <div>Window</div>
            <div>Help</div>
        </StyledStatusItem>
    )
}



export const Status = () => {

    return (
        <StyledStatus>
            <LeftItem />
            <RightItem />
        </StyledStatus>
    )
}