import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/logo.png'
const bg = {
    backgroundImage: 'linear-gradient(#f8a5b8, #ffe8ed, #f8a5b8)',
    marginTop: '100px'
}
const Footer = () => {
    return (
        <AppBar position="static" style={bg} >
            <Container maxWidth="md">
                <Toolbar>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={img} alt="" height='150px' />
                            <Typography variant="h5" sx={{ ml: -2 }}>
                                Sparkle Beauty <br /> We Care Your Smile
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </Container>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                © 2021 || All rights reserved by Khurshida Jahan Meem
            </Typography>
        </AppBar>
    );
};

export default Footer;