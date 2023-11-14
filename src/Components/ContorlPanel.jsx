import { useMemo } from 'react'
import styled from 'styled-components'
import SlideController from './SlideController'
import useEnvStore from '../store/envStore'

const StyledControlPanel = styled.div`

    position: absolute;
    top: 35px;
    right: 8px;

    width: 300px;

    background-color: #ffffff78;
    opacity: 0.9;

    border-radius: 15px;
    
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 7px;

    & > div {
        margin-bottom: 10px;
        box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    }

`

export const ControlPanel = () => {
    const { setSound, setBrightness } = useEnvStore();

    const sliderList = useMemo(() => {
        return [
            {
                'name': '디스플레이',
                'type': 'brightness',
                'setValue': setBrightness
            },
            {
                'name': '사운드',
                'type': 'sound',
                'setValue': setSound
            }
        ]
    }, [setBrightness, setSound]);
    

    return (
        <StyledControlPanel id="controlPanel">
            {sliderList.map((slider) => <SlideController key={slider.name} type={slider.name} setSliderValue={slider.setValue} />)}
        </StyledControlPanel>
    )
}