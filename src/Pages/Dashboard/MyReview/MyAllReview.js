import { Button, Container, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyAllReview = () => {

    const [reviews, setReviews] = useState([]);
    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const email = [user.email];

    // get order by email 
    useEffect(() => {
        fetch('https://sparkle-beauty.herokuapp.com/reviews/byEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setReviews(data)
                }

            })
    }, [reviews])

    // delete review
    const handleDelete = id => {
        console.log(id);
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

    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <h2>My Reviews</h2>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
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

export default MyAllReview;