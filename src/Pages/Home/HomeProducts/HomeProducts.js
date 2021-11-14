import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';

const contentContainer = {
    marginTop: '100px'
}
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container style={contentContainer}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product => <SingleProduct
                        key={product.key}
                        product={product}
                        page={'home'}
                    ></SingleProduct>)
                }

            </Grid>
        </Container>

    );
};

export default HomeProducts;