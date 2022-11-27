import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from './components/AppNavbar';
import AppSidebar from './components/AppSidebar';

function SidebarAndNavbar () {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <AppNavbar open={open} setOpen={setOpen}/>
    <AppSidebar open={open} setOpen={setOpen}/>
    </>
  );
}

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SidebarAndNavbar/>
    </Box>
);
}

export default App;
