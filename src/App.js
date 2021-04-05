import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { PALETTE } from './constants/Palette';
import "./App.scss";
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies/Hobbies';
import Footer from './components/Footer/Footer';

let theme = createMuiTheme({
  palette: {
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
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
