import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../../images/login.png'
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [signinData, setSigninData] = useState({});
    const { firebaseContext } = useAuth();
    const { user, signInUsingGoogle, signInUsingEmailandPass, error, setIsLoading, setError, saveUser } = firebaseContext;
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from?.pathname || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSigninData = { ...signinData };
        newSigninData[field] = value;
        setSigninData(newSigninData);
    }
    const handleSigninSubmit = e => {
        signInUsingEmailandPass(signinData.email, signinData.password)
            .then(() => {
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

        e.preventDefault();
    }
    console.log(user)
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
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
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