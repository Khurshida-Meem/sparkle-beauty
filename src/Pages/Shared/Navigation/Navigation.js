import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navigation.css'
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;

    return (
        // large screen navbar
        <>
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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Box>
                            <Button color="inherit">Login</Button>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navigation;