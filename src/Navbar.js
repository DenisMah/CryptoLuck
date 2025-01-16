import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


import "./Navbar.css";

function Navbar() {

  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CryptoLuck
        </Typography>

        {/* Horizontal Menu */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;