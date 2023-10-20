import React from 'react'
import styled from 'styled-components'

const StyledControlPanel = styled.div`

    position: absolute;
    top: 35px;
    right: 8px;

    width: 20vw;
    height: 400px;

    background-color: #ffffff78;
    opacity: 0.9;

    border-radius: 15px;
    
    user-select: none;

`

export const ControlPanel = () => {

    return (
        <StyledControlPanel>
            
        </StyledControlPanel>
    )
}