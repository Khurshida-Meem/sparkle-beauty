import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useData from '../../../hooks/useData';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';

const contentContainer = {
    marginTop: '100px',

}
const HomeProducts = () => {

    const products = useData('https://sparkle-beauty.herokuapp.com/products');
    products.splice(6, products.length);

    return (
        <Container style={contentContainer}>
            <Box sx={{ fontSize: '24px', m: 1, fontWeight: 'bold', textAlign: 'center' }}>Our Products</Box>

            <Box sx={{ fontSize: '32px', m: 1, fontWeight: 'bold', textAlign: 'center', color: '#ff8ba7', mb: 2 }}>Most Wanted Colors</Box>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                            page={'home'}
                        ></SingleProduct>)
                    }

                </Grid>
            </Box>

        </Container>

    );
};

export default HomeProducts;