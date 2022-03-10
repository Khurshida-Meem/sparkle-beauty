import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import about1 from '../../../images/about1.jpg'
import about2 from '../../../images/about2.jpg'
import about3 from '../../../images/about3.jpg'
import about4 from '../../../images/about4.jpg'

const About = () => {
    return (
        <Container sx={{ mt: 12 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <Grid item xs={12} sm={12} md={6}>
                    <Box>
                        <Typography variant="h5" gutterBottom component="div">
                            About Us
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" gutterBottom>
                            Your top source for all things makeup. Check out the newest cosmetics, from the best foundation, mascara and eyeliner to a life-changing foundation, concealer and face powder. Learn how to apply makeup like the pros with expert DIY tutorials and tips from celebrity makeup artists. Discover the hottest fashion week beauty trends and make them your own by following the latest news about makeup trends and must-have products.
                            Your top source for all things makeup. Check out the newest cosmetics, from the best foundation, mascara and eyeliner to a life-changing foundation, concealer and face powder. Learn how to apply makeup like the pros with expert DIY tutorials and tips from celebrity makeup artists. Discover the hottest fashion week beauty trends and make them your own by following the latest news about makeup trends and must-have products.
                        </Typography>
                    </Box>
                </Grid>
                <Grid container xs={12} sm={6} md={6} sx={{ pl: 2 }} >
                    <Grid container item >
                        <img src={about1} alt="" height="250px" width="100%" />
                    </Grid>
                    <Grid container item spacing={1} sx={{ mt: 1 }}>
                        <Grid item xs={4} >
                            <img src={about2} alt="" height="100px" width="100%" />
                        </Grid>
                        <Grid item xs={4}>
                            <img src={about3} alt="" height="100px" width="100%" />
                        </Grid>
                        <Grid item xs={4}>
                            <img src={about4} alt="" height="100px" width="100%" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;