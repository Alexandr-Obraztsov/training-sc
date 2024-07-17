import styled from "styled-components";
import {theme} from "../Theme";

type StyledButtonProps = {
    outlined?: boolean
}


export const Button = styled.a<StyledButtonProps>`
    width: 86px;
    height: 30px;
    background-color: ${props => props.outlined ? theme.button.outlined.background : theme.button.basic.background};
    color: ${props => props.outlined ? theme.button.outlined.text : theme.button.basic.text};
    border-radius: 5px;
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${theme.button.basic.background};
    text-decoration: none;
`