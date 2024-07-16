import React from 'react';
import './App.css';
import styled from "styled-components";
import {Card} from "./components/Card";

function App() {
    return (
        <Main>
            <Card isDark/>
            <Card/>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`

export default App;
