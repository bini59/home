import React from 'react'
import styled from 'styled-components'
import { Slider } from './Slider';

const StyledSlideController = styled.div`
    background-color: #ffffff78;
    border-radius: 10px;

    width: 100%;
    height: 60px;

    display: flex;
    flex-direction: column;

    padding: 5px 10px;

    & > div {
        font-size: 0.8rem;
        font-weight: 600;
    
    }
`

export const SlideController = ({ type, clicked }) => {
    return (
        <StyledSlideController>
            <div>{type}</div>
            <Slider type={type} clicked={clicked} />
        </StyledSlideController>
    );
}