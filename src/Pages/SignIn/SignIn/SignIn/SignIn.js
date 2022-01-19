import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../../images/login.png'
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';

const SignIn = () => {
    const [signinData, setSigninData] = useState({ email: '', password: '' });
    const { firebaseContext } = useAuth();
    const { signInUsingGoogle, signInUsingEmailandPass, error } = firebaseContext;
    const history = useHistory();
    const location = useLocation();

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSigninData = { ...signinData };
        newSigninData[field] = value;
        setSigninData(newSigninData);
    }
    const handleSigninSubmit = e => {
        signInUsingEmailandPass(signinData?.email, signinData?.password, location, history);
        e.preventDefault();
    }

    return (

        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Box sx={{ mt: 8 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6} lg={6}>
                        <Typography sx={{ textAlign: 'center' }} variant="h4" gutterBottom>Please Sign in</Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <form sx={{ mt: 8 }} onSubmit={handleSigninSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="email"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="password"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign In</Button>

                            </form>
                        </Box>
                        {error && <Box sx={{ textAlign: 'center' }}>
                            <Alert severity="error">{error}</Alert>
                        </Box>}
                        <Box sx={{ textAlign: 'center' }}>
                            <Button onClick={handleGoogleLogin} variant="contained"><GoogleIcon /> Google Sign In</Button>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Link to='/sign_up'>New to Sparkle Beauty?</Link>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Link to='/'><HomeIcon sx={{ color: pink[500] }} /> Back to Home</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img style={{ width: '100%' }} src={img} alt="..." />
                    </Grid>
                </Grid>
            </Box>

        </Container>

    );
};

export default SignIn;