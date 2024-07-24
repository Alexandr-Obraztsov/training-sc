import {theme} from "../Theme";
import React from "react";
import styled from "styled-components";
import {StyledButton} from "./StyledButton";
import {CardWrapper} from "./Wrapper";

export type CardProps = {
    isDark?: boolean
}

export function Card(props: CardProps) {
    return (
        <StyledCard isDark={props.isDark}>
            <Image src={props.isDark ? theme.link.dark : theme.link.light}
                   alt={props.isDark ? "Dark image" : "Light image"}/>
            <Title isDark={props.isDark}>Headline</Title>
            <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
            <CardWrapper>
                <StyledButton href="#">See more</StyledButton>
                <StyledButton href="#" outlined>Save</StyledButton>
            </CardWrapper>
        </StyledCard>
    )
}

const StyledCard = styled.main<CardProps>`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: ${props => props.isDark ? theme.color.dark.background : theme.color.light.background};
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.18);
    padding: 10px;

    @media screen and (max-width: 300px) {
        height: unset;
    }
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 170px;
    border-radius: 10px;
`

const Text = styled.h1<CardProps>`
    color: ${props => props.isDark ? theme.color.dark.p : theme.color.light.p};
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    margin: 20px;
`

const Title = styled.h1<CardProps>`
    color: ${props => props.isDark ? theme.color.dark.h1 : theme.color.light.h1};
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin: 20px;
`