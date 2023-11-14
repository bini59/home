import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledSlider = styled.div`
    background-color: #abababaa;
    width: 100%;
    height: 24px;

    margin-top: 3px;

    border: 1px solid #ababab;
    border-radius: 24px;
    z-index: 1;

    & > input {
        display: none;
    }

    & > .slider-circle {
        position: relative;
        top: -1px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #ffffff;
        border: 1px solid #ababab;
        z-index: 3;
    }

    & > .slider-background {
        position: relative;
        top: -25px;
        left: -1px;
        background-color: #ffffff;
        height: 24px;
        border-radius: 24px;
        z-index: 2;
        border: 1px solid #ababab;

    }
`
const SLIDER_WIDTH = 242;

const mouseMove = (e, clicked, setLeft) => {
    if (!clicked) return;

    const slider = document.querySelector('.sliderContainer');
    const circle = document.querySelector('.slider-circle');

    const sliderRect = slider.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();

    const left = (e.clientX - sliderRect.left - circleRect.width / 2);
    const right = sliderRect.width - circleRect.width;

    if (e.clientX < 10) return;

    if (left < 0) {
        setLeft(0);
    }
    else if (left > right) {
        setLeft(100);
    }
    else {
        setLeft((left / right) * 100)
    }
}

export const Slider = ({type, setSliderValue}) => {
    const [value, setValue] = React.useState(0);
    const [left, setLeft] = React.useState(-1);
    const [width, setWidth] = React.useState(0);
    const [clicked, setClicked] = React.useState(false);

    // 마우스 클릭상태를 확인하기 위한 event handler 등록
    useEffect(() => {
        const mousedown = (e) => {
            if (e.target.closest(`#${type}`)) setClicked(type);
        }
        const mouseup = () => setClicked(false)

        document.addEventListener('mousedown', mousedown);
        document.addEventListener('mouseup', mouseup);

        return () => {
            document.removeEventListener('mousedown', mousedown);
            document.removeEventListener('mouseup', mouseup);
        }
    }, [])

    // 흰색 동그라미랑 진행도 옮기기 위한 과정
    useEffect(() => {
        setLeft(((value / 100) * SLIDER_WIDTH) - 1);
        setWidth(value * ((SLIDER_WIDTH - 24) / SLIDER_WIDTH));
        setSliderValue(value);
    }, [value]);

    return (
        <StyledSlider
            id={type}
            className={`sliderContainer`}
            onMouseMove={(e) => mouseMove(e, clicked, setValue)}
            onMouseDown={(e) => mouseMove(e, true, setValue)}
        >
            <input type='range' className='slider' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <div
                className={`slider-circle`}
                style={{ left: `${left}px`, backgroundColor: `${clicked ? '#ebebeb' : '#ffffff'}` }}
            ></div>
            <div
                className='slider-background'
                style={{width : `calc(${width}% + 24px)`}}
            ></div>
        </StyledSlider>
    );
}