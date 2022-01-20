import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://sparkle-beauty.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Box>
                <Typography sx={{ textAlign: 'center', marginTop: '16px' }} variant="h4" gutterBottom>Make Admin</Typography>
            </Box>
            <form sx={{ mt: 8 }} onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    required
                    id="email"
                    label="Enter Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />

                <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Make Admin</Button>

            </form>
        </Container>
    );
};

export default MakeAdmin;