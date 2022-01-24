import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sparkle-beauty.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setProducts(data)
                }

            })
    }, [products])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sparkle-beauty.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }

                });
        }
    }

    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <h2>All Products</h2>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img src={row.thumb} alt="" width='50px' />

                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.shortDesc}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell> <Button onClick={() => handleDelete(row._id)} color="inherit">Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
};

export default AllProducts;