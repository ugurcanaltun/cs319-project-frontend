import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from './components/AppNavbar';
import AppSidebar from './components/AppSidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AnnouncementsScreen from './screens/AnnouncementsScreen'
import ApplicationScreen from './screens/ApplicationScreen'
import ChecklistScreen from './screens/ChecklistScreen'
import ContactsScreen from './screens/ContactsScreen'
import CourseTransferScreen from './screens/CourseTransferScreen'
import EvaluationsScreen from './screens/EvaluationsScreen'
// import ForumScreen from './screens/ForumScreen'
import LearningAgreementScreen from './screens/LearningAgreementScreen'
import MessageScreen from './screens/MessageScreen'
import PreApprovalScreen from './screens/PreApprovalScreen'
import ToDoListScreen from './screens/ToDoListScreen'
import WishListScreen from './screens/WishListScreen'
// import UploadTranscript from './screens/ISO/UploadTranscript';
import UploadScoreTable from './screens/ISO/UploadScoreTable';

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
            <Route path="/" element={<ToDoListScreen/>}/>
            <Route path="/announcements" element={<AnnouncementsScreen/>}/>
            <Route path="/application" element={<ApplicationScreen/>}/>
            <Route path="/checklist" element={<ChecklistScreen/>}/>
            <Route path="/contacts" element={<ContactsScreen/>}/>
            <Route path="/courseTransfer" element={<CourseTransferScreen/>}/>
            <Route path="/evaluations" element={<EvaluationsScreen/>}/>
            <Route path="/forum" element={<UploadScoreTable/>}/>
            <Route path="/learningAgreement" element={<LearningAgreementScreen/>}/>
            <Route path="/message" element={<MessageScreen/>}/>
            <Route path="/preapproval" element={<PreApprovalScreen/>}/>
            <Route path="/wishlist" element={<WishListScreen/>}/>
          </Routes>
        </Box>
      </Box>
    </Router>
);
}

export default App;
