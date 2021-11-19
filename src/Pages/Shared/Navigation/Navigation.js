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
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import logo from '../../../images/logo.png'

const Navigation = () => {
    const theme = useTheme();
    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;
    const useStyle = makeStyles({
        navItem: {
            color: '#33272a !important',
            textDecoration: 'none'
        },
        mobileNavItem: {
            color: 'black',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        itemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        logoImg: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important'
            }
        },
        navBackground: {
            backgroundColor: '#ff8ba7 !important'
        }
    })

    const { navItem, navIcon, itemContainer, logoImg, mobileNavItem, navBackground } = useStyle();

    // ========================== for mobile view ======================== //
    const [state, setState] = React.useState(false);

    return (

        <>
            {/* ========================== desktop and tab view ============================== */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={navBackground}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={logoImg} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={logo} alt='Logo' height='70px' />
                        </Typography>


                        <Box className={itemContainer}>
                            <Link className={navItem} to='/'><Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button></Link>
                            <Link className={navItem} to='/explore'><Button color="inherit" sx={{ fontWeight: 'bold' }} >Explore</Button></Link>

                            {user && <Link className={navItem} to='/dashboard'><Button color="inherit" sx={{ fontWeight: 'bold' }}>Dashboard</Button></Link>}

                            {user || <Link className={navItem} to='/sign_in'><Button color="inherit" sx={{ fontWeight: 'bold' }}>Sign In</Button></Link>}

                            {user && <Typography variant="p" sx={{ flexGrow: 1 }}>
                                {user.displayName}
                            </Typography>}
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>

            {/*======================== mobile view ================================*/}
            <div>
                <React.Fragment>
                    <SwipeableDrawer
                        open={state}
                        onClose={() => setState(false)}
                        onOpen={() => setState(true)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"

                        >
                            <List>
                                <ListItem>
                                    <Link className={mobileNavItem} to='/'><Button color="inherit">Home</Button></Link>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Link className={mobileNavItem} to='/explore'><Button color="inherit">Explore</Button></Link>
                                </ListItem>
                                <Divider />
                                {user.email && <ListItem>
                                    <Link className={mobileNavItem} to='/products'><Button color="inherit">Pay</Button></Link>
                                </ListItem>}
                                <Divider />
                                {user.email && <ListItem>
                                    <Link className={mobileNavItem} to='/products'><Button color="inherit">My Orders</Button></Link>
                                </ListItem>}
                                <Divider />
                                {user.email && <ListItem>
                                    <Link className={mobileNavItem} to='/products'><Button color="inherit">Review</Button></Link>
                                </ListItem>}
                                <Divider />
                                {user.email || <ListItem>
                                    <Link className={mobileNavItem} to='/sign_in'><Button color="inherit">Sign In</Button></Link>
                                </ListItem>
                                }
                                <Divider />
                                {user.email && <ListItem><Typography variant="p" sx={{ flexGrow: 1 }}>
                                    {user.displayName}
                                </Typography></ListItem>}
                            </List>

                        </Box>
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;