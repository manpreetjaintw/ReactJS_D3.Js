import React, {useState}from 'react';
import NavBar from './components/Navbar'
import Player from './components/Player'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';

import { GlobalStyles } from './global';
import "./App.css"

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      <button  className="togglebtn" onClick={toggleTheme}>Toggle theme</button>
      <NavBar />
      <Player />
    
    </>
  </ThemeProvider>

   
  );
}

export default App;