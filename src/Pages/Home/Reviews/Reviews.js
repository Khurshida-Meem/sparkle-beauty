import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';

import { Box } from '@mui/system';
import Review from './Review';

const contentContainer = {
    marginTop: '100px'
};

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container style={contentContainer} sx={{ flexGrow: 1 }}>
            <Box sx={{ fontSize: '24px', m: 1, fontWeight: 'bold', textAlign: 'center' }}>Featured Reviews</Box>
            <Box sx={{ fontSize: '32px', m: 1, fontWeight: 'bold', textAlign: 'center', color: '#ff8ba7', mb: 2 }}>Thoughts of Our Well-Wishers</Box>


            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review
                        key={review.key}
                        review={review}
                    >
                    </Review>)
                }
            </Grid>

        </Container>

    );
};

export default Reviews;