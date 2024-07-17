import styled from "styled-components";
import {theme} from "../Theme";

type StyledButtonProps = {
    outlined?: boolean
}


export const Button = styled.a<StyledButtonProps>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid ${theme.button.basic.background};

    ${props => {
        if (props.outlined) {
            return `background-color: ${theme.button.outlined.background};
                    color: ${theme.button.outlined.text};`
        }
        return `background-color: ${theme.button.basic.background};
                color: ${theme.button.basic.text};
        `
    }}
`