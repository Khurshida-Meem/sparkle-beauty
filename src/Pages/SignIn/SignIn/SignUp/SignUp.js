import React, { useState } from 'react';
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import img from '../../../../images/login.png'
import useAuth from '../../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';

const SignUp = () => {
    const [signupData, setSignupData] = useState({});
    const { firebaseContext } = useAuth();
    const { user, createUsingEmailPassword, error, setError, setUserName, setIsLoading, saveUser } = firebaseContext;
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignupData = { ...signupData };
        newSignupData[field] = value;
        setSignupData(newSignupData);
    }
    const handleSignupSubmit = e => {
        e.preventDefault();
        // password validation
        if (signupData.password.length < 6) {
            setError('Password should be 6 charecters');
            return;
        }
        // create account
        createUsingEmailPassword(signupData.email, signupData.password)
            .then(result => {
                setUserName(signupData.username);
                saveUser(signupData.email, signupData.username, 'POST');
                history.push(redirect_url);
                window.location.reload();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ mt: 8 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6} lg={6}>
                        <Typography sx={{ textAlign: 'center' }} variant="h4" gutterBottom>Please Sign Up</Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <form sx={{ mt: 8 }} onSubmit={handleSignupSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    label="Username"
                                    name="username"
                                    type="text"
                                    onChange={handleOnChange}
                                    variant="standard" />
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

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign Up</Button>

                            </form>
                        </Box>

                        {error && <Box sx={{ textAlign: 'center' }}>
                            <Alert severity="error">{error}</Alert>
                        </Box>}
                        <Box sx={{ textAlign: 'center' }}>
                            <Link to='/sign_in'>Already Registered?</Link>
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

export default SignUp;