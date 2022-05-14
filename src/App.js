import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import {createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider,} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import {PALETTE} from './constants/Palette';
import "./App.scss";
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies/Hobbies';
import Footer from './components/Footer/Footer';
import Projects from "./components/Projects/Projects";

let theme = createTheme(({
    components: {
        MuiCard: {
            styleOverrides: {
                backgroundColor: {
                    default: PALETTE.background
                }
            }
        }
    },
    palette: {
        type: 'dark',
        primary: {
            main: PALETTE.primary,
        },
        secondary: {
            main: PALETTE.secondary,
        },
        text: {
            primary: PALETTE.textPrimary
        },
        background: {
            default: PALETTE.background
        }
    },
    typography: {
        fontFamily: [
            'Josefin Sans',
            'sans-serif',
        ].join(',')
    },
}));
theme = responsiveFontSizes(theme);

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Home/>
                <About/>
                <Experience/>
                <Projects/>
                <Skills/>
                <Hobbies/>
                <Footer/>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
