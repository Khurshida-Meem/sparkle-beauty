import React from 'react';
import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import './Reviews.css';
import { Box } from '@mui/system';
import { deepOrange } from '@mui/material/colors';

const Review = ({ review }) => {
    const { userName, rating, description, thumb } = review;
    let star = parseInt(rating);
    if (star > 5 || star < 0) {
        star = 5;
    }
    return (

        <Box sx={{ alignContent: 'stretch' }}>
            <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        alt={userName}
                        src={thumb}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                        {userName}
                    </Typography>
                    <Box style={{ textAlign: 'center' }}>
                        <Rating name="rating" value={star} readOnly />
                    </Box>
                    <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Review;