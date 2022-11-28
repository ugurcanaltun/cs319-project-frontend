import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from './components/AppNavbar';
import AppSidebar from './components/AppSidebar';
import Contacts from './components/Contacts'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function SidebarAndNavbar () {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <AppNavbar open={open} setOpen={setOpen}/>
    <AppSidebar open={open} setOpen={setOpen}/>
    </>
  );
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SidebarAndNavbar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        </Box>
      </Box>
    </Router>
);
}

export default App;
