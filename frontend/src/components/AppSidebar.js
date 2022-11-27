import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ChecklistIcon from '../assets/ChecklistIcon';
import WishListIcon from '../assets/WishlistIcon';
import PreapprovalIcon from '../assets/PreapprovalIcon';
import LearningAgreementIcon from '../assets/LearningAgreementIcon';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
  
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
);

export default function AppSidebar(props) {
    const sideBarItems = [
        {
          id: 0,
          label: "To Do List",
          icon: (<PlaylistAddCheckIcon/>),
        },
        {
          id: 1,
          label: "Checklist",
          icon: (<ChecklistIcon/>),
        },
        {
          id: 2,
          label: "Wish List",
          icon: (<WishListIcon/>),
        },
        {
          id: 3,
          label: "Preapproval",
          icon: (<PreapprovalIcon/>),
        },
        {
          id: 4,
          label: "Learning Agreement",
          icon: (<LearningAgreementIcon/>),
        },
        {
          id: 5,
          label: "Course Transfer",
          icon: (<SwapHorizIcon/>),
        }
    ]
    const theme = useTheme();
    const handleDrawerClose = () => {
        props.setOpen(false);
    };
    return (
        <Drawer variant="permanent" open={props.open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <List>
                {sideBarItems.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                            minHeight: 48,
                            justifyContent: props.open ? 'initial' : 'center',
                            px: 2.5,
                            }}
                        >
                            <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: props.open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>    
    );
}