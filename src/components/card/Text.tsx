import styled from "styled-components";
import {theme} from "../Theme";
import {CardProps} from "./Card";

export const Text = styled.h1<CardProps>`
    color: ${props => props.isDark ? theme.color.dark.p : theme.color.light.p};
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    margin: 20px;
`