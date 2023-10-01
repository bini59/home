import React from "react";
import styled, { css } from "styled-components";

import noapp from "../assets/icons/noApp.png"
import wallet from "../assets/icons/wallet.svg"
import safari from "../assets/icons/safari.svg"
import photos from "../assets/icons/photos.svg"
import appleMusic from "../assets/icons/apple-music.svg"
import mail from "../assets/icons/mail.svg"
import messages from "../assets/icons/message.svg"
import weather from "../assets/icons/weather.svg"
import finder from "../assets/icons/files.svg"

const icons = {
    "noapp": noapp,
    "wallet": wallet,
    "safari": safari,
    "photos": photos,
    "music": appleMusic,
    "mail": mail,
    "messages": messages,
    "weather": weather,
    "finder": finder,
}

const StyledIconWrapper = styled.div`
    /* margin: 0 calc(47.5vw - 5.225vw - 120px); */
    position: relative;
`

const StyledIconText = styled.div`
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin-top: 5px;
    width: 60px;
    height: 14px;
`

const StyledIconAction = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border-radius: 14px;
    z-index: 1;

    &:active {
        background-color: #000;
        opacity: 0.4;
    }
`

export const Icon = ({
    name,
    type,
    size,
    func
}) => {

    const StyledIcon = styled.div`
        position: relative;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        border-radius: 14px;
        background-image: url(${name in icons ? icons[name] : icons["noapp"]});
        z-index: 0;
    `

    return (
        <StyledIconWrapper>
            <StyledIcon />
            <StyledIconAction onClick={()=>{if(func)func()}}/>
            {type === "app" && (<StyledIconText>{name}</StyledIconText>)}
        </StyledIconWrapper>
    );
}