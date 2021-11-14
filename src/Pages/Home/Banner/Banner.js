import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/banner-bg.jpg'

const bannerBg = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    marginTop: '10px'
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const hilightText = {
    color: '#ff8ba7'
}
const bannerContent = {
    color: '#33272a !important',
    fontWeight: '700'
}
const Banner = () => {
    return (
        <div style={bannerBg}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3" style={bannerContent}>
                                Welcome To <span style={hilightText}>Sparkle</span> Beauty
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 16, fontWeight: 300, color: '#594a4e' }}>
                                Your smile is our priority. Everyday smile beautifully.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#ff8ba7', color: '#33272a', fontWeight: 'bold' }}>Explore</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Banner;