import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import useData from '../../../hooks/useData';

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
                        products.map(product => <SingleProduct
                            key={product.key}
                            product={product}
                            page={'home'}
                        ></SingleProduct>)
                    }

                </Grid>
            </Box>

        </Container>
    );
};

export default ExploreProducts;