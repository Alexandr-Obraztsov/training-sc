import {theme} from "./Theme";
import React from "react";
import styled from "styled-components";
import {StyledButton} from "./styled/StyledButton";

const StyledCard = styled.main<CardProps>`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: ${props => props.isDark ? theme.color.dark.background : theme.color.light.background};
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.56);
    padding: 10px;

    @media screen and (max-width: 300px){
        height: unset;
    }
    
    h1 {
        color: ${props => props.isDark ? theme.color.dark.h1 : theme.color.light.h1};
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 700;
        margin: 20px;
    }

    p {
        color: ${props => props.isDark ? theme.color.dark.p : theme.color.light.p};
        font-family: Inter, sans-serif;
        font-size: 12px;
        font-weight: 500;
        margin: 20px;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 170px;
        border-radius: 10px;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 12px;
        margin: 20px;

        @media screen and (max-width: calc(86px*2 + 12px)){
            flex-direction: column;
        }
    }
`

export function Card(props: CardProps) {
    if (props.isDark) {
        return (
            <StyledCard isDark>
                <img src={theme.link.dark} alt="Dark image"/>
                <h1>Headline</h1>
                <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                <div>
                    <StyledButton>See more</StyledButton>
                    <StyledButton outlined>Save</StyledButton>
                </div>
            </StyledCard>
        )
    }
    return (
        <StyledCard>
            <img src={theme.link.light} alt="Light image"/>
            <h1>Headline</h1>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <div>
                <StyledButton>See more</StyledButton>
                <StyledButton outlined>Save</StyledButton>
            </div>
        </StyledCard>
    )
}


type CardProps = {
    isDark?: boolean
}