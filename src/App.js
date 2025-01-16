import theme from './theme/theme.js'
import { ThemeProvider } from "@mui/material/styles";
import React from 'react';
import Navbar from './Navbar.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar theme={theme}>

      </Navbar>
    </ThemeProvider>
  );
}
export default App;