import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import useData from '../../../hooks/useData'
import Review from './Review';

const contentContainer = {
    marginTop: '100px'
};

const Reviews = () => {

    const reviews = useData('https://sparkle-beauty.herokuapp.com/reviews');

    return (
        <Container style={contentContainer} sx={{ flexGrow: 1 }}>
            <Box sx={{ fontSize: '24px', m: 1, fontWeight: 'bold', textAlign: 'center' }}>Featured Reviews</Box>
            <Box sx={{ fontSize: '32px', m: 1, fontWeight: 'bold', textAlign: 'center', color: '#ff8ba7', mb: 2 }}>Thoughts of Our Well-Wishers</Box>


            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </Grid>

        </Container>

    );
};

export default Reviews;