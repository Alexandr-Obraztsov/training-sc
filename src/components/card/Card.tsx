import {theme} from "../Theme";
import React from "react";
import styled from "styled-components";
import {Button} from "./Button";
import {Title} from "./Title";
import {Text} from "./Text";
import {Image} from "./Image";
import {Wrapper} from "./Wrapper";

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
            <Wrapper>
                <Button href="#">See more</Button>
                <Button href="#" outlined>Save</Button>
            </Wrapper>
        </StyledCard>
    )
}

const StyledCard = styled.main<CardProps>`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: ${props => props.isDark ? theme.color.dark.background : theme.color.light.background};
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.56);
    padding: 10px;

    @media screen and (max-width: 300px) {
        height: unset;
    }
`

