import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import useData from '../../../hooks/useData'
import Review from './Review';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentContainer = {
    marginTop: '100px'
};

const Reviews = () => {

    const reviews = useData('https://sparkle-beauty.herokuapp.com/reviews');

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <Container style={contentContainer} sx={{ flexGrow: 1 }}>
            <Box sx={{ fontSize: '24px', m: 1, fontWeight: 'bold', textAlign: 'center' }}>Featured Reviews</Box>
            <Box sx={{ fontSize: '32px', m: 1, fontWeight: 'bold', textAlign: 'center', color: '#ff8ba7', mb: 2 }}>Thoughts of Our Well-Wishers</Box>


            <Slider {...settings}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </Slider>
        </Container>

    );
};

export default Reviews;