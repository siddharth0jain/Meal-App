import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Breadcrumb from './Breadcrumb';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Breadcrumb />
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/menu" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Menu" />
                    </ListItem>
                    <ListItem button component={Link} to="/my-favorites" onClick={toggleDrawer(false)}>
                        <ListItemText primary="My Favorites" />
                    </ListItem>
                    <ListItem button component={Link} to="/meal-generator" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Meal Generator" />
                    </ListItem>
                    <ListItem button component={Link} to="/about-me" onClick={toggleDrawer(false)}>
                        <ListItemText primary="About Me" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;