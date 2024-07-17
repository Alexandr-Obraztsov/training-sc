import React from 'react';
import './App.css';
import styled from "styled-components";
import {Card} from "./components/card/Card";

function App() {
    return (
        <Box>
            <Card isDark/>
            <Card/>
        </Box>
    );
}

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`

export default App;
