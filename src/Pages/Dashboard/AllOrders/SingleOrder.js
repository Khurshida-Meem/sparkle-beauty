import React, { useEffect, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const SingleOrder = (props) => {

    const [orders, setOrders] = useState([]);
    const { _id, userName, name, email, status, price } = props.row;

    useEffect(() => {
        fetch(`https://sparkle-beauty.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sparkle-beauty.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }

                });
        }
    }

    // approve status or update status in database

    const handleStatus = (id, status) => {
        const updated = { status: status };

        const url = `https://sparkle-beauty.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert(`Order ${status}`);
                }
            })
    };

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {userName}
            </TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>
                <Button size="small" onClick={() => handleStatus(_id, 'Shipped')} >Ship</Button>
                <Button size="small" onClick={() => handleStatus(_id, 'Cancelled')} >Cancel</Button>
                <Button size="small" onClick={() => handleDelete(_id)} >Delete</Button>
            </TableCell>
        </TableRow>
    );
};

export default SingleOrder;