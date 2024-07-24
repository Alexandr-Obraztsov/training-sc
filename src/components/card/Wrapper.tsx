import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin: 20px;

    @media screen and (max-width: calc(86px * 2 + 12px)) {
        flex-direction: column;
    }
`