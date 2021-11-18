import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import useData from '../../../hooks/useData';
import Loader from "react-loader-spinner";

const contentContainer = {
    marginTop: '100px'

}
const ExploreProducts = () => {

    const products = useData('https://sparkle-beauty.herokuapp.com/products');

    return (
        <Container style={contentContainer}>
            <Box sx={{ fontSize: '24px', m: 1, fontWeight: 'bold', textAlign: 'center' }}>Our Products</Box>

            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    {
                        products.length ?
                            products.map(product => <SingleProduct
                                key={product._id}
                                product={product}
                                page={'explore'}
                            ></SingleProduct>) : <Box style={{ textAlign: 'center', marginTop: '16px' }}>
                                <Loader type="BallTriangle" color="#f8a5b8" height={80} width={80} />
                            </Box>
                    }

                </Grid>
            </Box>

        </Container>
    );
};

export default ExploreProducts;