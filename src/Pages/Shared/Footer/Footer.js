import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../../../images/logo.png";
const bg = {
    backgroundColor: "#f8a5b8",
    marginTop: "100px",
};
const Footer = () => {
    return (
        <AppBar position="static" style={bg}>
            <Container maxWidth="md">
                <Toolbar>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {/* <img src={img} alt="" className='w-25' /> */}
                            <Typography variant="h5">
                                Sparkle Beauty <br /> We Care Your Smile
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                © 2021 || All rights reserved by Khurshida Jahan Meem
            </Typography>
        </AppBar>
    );
};

export default Footer;
