import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./components/styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "./components/Theme";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <App/>
        <GlobalStyles/>
    </ThemeProvider>
);

reportWebVitals();
