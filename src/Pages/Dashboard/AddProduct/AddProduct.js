import { Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {

    const [product, setProduct] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleReviewSubmit = e => {
        const products = {
            ...product,

        }
        // send to the server
        axios.post('https://sparkle-beauty.herokuapp.com/products', products)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added product');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <h2>Add a Product</h2>
            </div>
            <p>sample url: https://i.ibb.co/x7xb3JX/revlon.jpg</p>
            <form style={{ textAlign: 'center' }} onSubmit={handleReviewSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Product Name"
                    name="name"
                    type="text"
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Short Description"
                    type="text"
                    name="shortDesc"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Broad Description"
                    type="text"
                    name="longDesc"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Product Price"
                    type="number"
                    name="price"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-basic"
                    label="Image URL"
                    type="text"
                    name="thumb"
                    onChange={handleOnChange}
                    variant="standard" />
                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add New Product</Button>
            </form>
        </Container>
    );
};

export default AddProduct;