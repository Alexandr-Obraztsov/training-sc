import styled from "styled-components";
import {theme} from "../Theme";
import {CardProps} from "./Card";

export const Title = styled.h1<CardProps>`
    color: ${props => props.isDark ? theme.color.dark.h1 : theme.color.light.h1};
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin: 20px;
`