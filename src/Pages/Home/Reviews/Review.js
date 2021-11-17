import React from 'react';
import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import './Reviews.css';
import { Box } from '@mui/system';
import { deepOrange } from '@mui/material/colors';

const Review = ({ review }) => {
    const { name, rating, description } = review;
    return (

        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        alt={name}
                        src="..."
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Box style={{ textAlign: 'center' }}>
                        <Rating name="rating" value={rating} readOnly />
                    </Box>
                    <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;