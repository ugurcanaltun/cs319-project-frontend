import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from './components/AppNavbar';
import AppSidebar from './components/AppSidebar';
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

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SidebarAndNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Box>
    </Router>
);
}

export default App;
