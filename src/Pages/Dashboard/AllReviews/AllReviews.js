import { Button, Container, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AllReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://sparkle-beauty.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setReviews(data)
                }

            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sparkle-beauty.herokuapp.com/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingReviews = reviews.filter(review => review._id !== id);
                        setReviews(remainingReviews);
                    }

                });
        }
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const machedreview = reviews.filter(review => review.email.toLowerCase().includes(searchText.toLowerCase()));
        setReviews(machedreview);

    }

    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <h2>All Reviews</h2>
            </div>
            <div>
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search user Review" />
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reviews.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.userName}
                                    </TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell><Rating name="rating" value={row.rating} readOnly /></TableCell>
                                    <TableCell>{row.description}</TableCell>
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

export default AllReviews;