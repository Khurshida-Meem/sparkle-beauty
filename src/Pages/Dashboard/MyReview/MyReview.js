import { Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyReview = () => {

    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const initialInfo = { userName: user.displayName, thumb: user.photoURL }
    const [review, setReview] = useState(initialInfo);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleReviewSubmit = e => {
        const reviews = {
            ...review,

        }
        // send to the server
        axios.post('https://sparkle-beauty.herokuapp.com/reviews', reviews)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added review');
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <h2>Give a Review</h2>
            </div>
            <form style={{ textAlign: 'center' }} onSubmit={handleReviewSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Rating"
                    name="rating"
                    type="number"
                    placeholder="give a Rating (0-5)"
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Comment"
                    type="text"
                    name="description"
                    onChange={handleOnChange}
                    variant="standard" />
                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Review</Button>
            </form>
        </Container>
    );
};

export default MyReview;