import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{
            flexGrow: 1}}
          >
            <Button size="large" color="inherit" sx={{textTransform: 'none'}}>
              Application
            </Button>
            <Button size="large" color="inherit" sx={{textTransform: 'none'}}>
              Contacts
            </Button>
            <Button size="large" color="inherit" sx={{textTransform: 'none'}}>
              Announcements
            </Button>
            <Button size="large" color="inherit" sx={{textTransform: 'none'}}>
              Evaluations
            </Button>
          </Box>
          <Box>
            <IconButton
              size="large"
              color="inherit"
            >
              <ForumIcon/>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <MessageIcon/>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <NotificationsIcon/>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <AccountCircleIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
