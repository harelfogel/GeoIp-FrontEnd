import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BiCurrentLocation } from "react-icons/bi";
import styled from 'styled-components'
import './Header.css';

const Icon = styled(BiCurrentLocation)`
  padding-bottom:2px;
  size:2%;
  transform: scale(2);
  margin-left:2px;

`;

function appBarLabel(label) {
  return (
    <Toolbar>
          <Icon/>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1,marginLeft:2 }}>
           {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function Header() {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('GeoIp')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}