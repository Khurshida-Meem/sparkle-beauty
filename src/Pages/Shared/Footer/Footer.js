import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../../../images/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const bg = {
    backgroundColor: "#f8a5b8",
    marginTop: "100px",
};
const Footer = () => {
    return (
        <AppBar position="static" style={bg}>
            <Container maxWidth="md">
                <Box style={{ color: "#33272a" }} sx={{ mt: 2 }}>
                    <InstagramIcon />
                    <EmailIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                </Box>
                <hr />
                <br />
                <Box>
                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} >
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h5">
                                    Sparkle Beauty <br /> We Care Your Smile
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h5">
                                    Content 1
                                </Typography>
                                <Typography variant="h5">
                                    Content 2
                                </Typography>
                                <Typography variant="h5">
                                    Content 3
                                </Typography>
                                <Typography variant="h5">
                                    Content 4
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h5">
                                    Content 1
                                </Typography>
                                <Typography variant="h5">
                                    Content 2
                                </Typography>
                                <Typography variant="h5">
                                    Content 3
                                </Typography>
                                <Typography variant="h5">
                                    Content 4
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                © 2021 || All rights reserved by Khurshida Jahan Meem
            </Typography>
        </AppBar>
    );
};

export default Footer;
