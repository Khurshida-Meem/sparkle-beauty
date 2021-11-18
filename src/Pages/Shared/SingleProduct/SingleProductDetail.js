import React, { useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';
import useAuth from '../../../hooks/useAuth'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navigation from '../Navigation/Navigation'
import axios from 'axios';



const SingleProductDetail = () => {

    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const { productId } = useParams();
    const product = useData(`https://sparkle-beauty.herokuapp.com/products/${productId}`);
    const { name, longDesc, price, thumb } = product;
    // send user information to database
    const initialInfo = { userName: user.displayName, email: user.email }
    // set user information in state to store in database
    const [order, setOrder] = useState(initialInfo);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        setOrder(newOrder);
    }
    const handleOrderSubmit = e => {
        const orders = {
            ...order,
            name,
            price
        }
        // send to the server
        axios.post('https://sparkle-beauty.herokuapp.com/orders', orders)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your order have been received');
                    e.target.value = '';
                }
            })
        console.log(orders);
        e.preventDefault();
    }

    return (
        <Box>
            <Navigation></Navigation>
            <Container sx={{ mt: 12 }}>
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={6} >
                            <Box>
                                <img src={thumb} alt="" />
                            </Box>
                            <Box>
                                <Typography style={{ fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                                    {name}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h3" gutterBottom component="div">
                                    ${price}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" gutterBottom component="div">
                                    {longDesc}
                                </Typography>
                            </Box>
                        </Grid>
                        {/* ************************* booking form ************************************* */}
                        <Grid item xs={12} sm={12} md={6} >
                            <Box style={{ textAlign: 'center', marginTop: '16px' }}>
                                <Typography variant="h5" gutterBottom component="div">
                                    Place Order
                                </Typography>
                            </Box>
                            <form style={{ textAlign: 'center' }} onSubmit={handleOrderSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    label="Your Name"
                                    name="username"
                                    type="text"
                                    defaultValue={user.displayName}
                                    onBlur={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    label="Your Email"
                                    defaultValue={user.email}
                                    type="email"
                                    name="email"
                                    onBlur={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    value={name}
                                    type="text"
                                    name="productName"
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    value={price}
                                    type="text"
                                    name="productPrice"
                                    variant="standard" />

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    label="Address"
                                    type="text"
                                    name="address"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    required
                                    id="standard-basic"
                                    label="Contact Number"
                                    type="text"
                                    name="contact"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Place Order</Button>

                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default SingleProductDetail;