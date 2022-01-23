import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import SingleOrder from './SingleOrder';
import TableHeadComponent from './TableHeadComponent';


const AllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://sparkle-beauty.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setOrders(data)
                }

            })
    }, [orders])



    return (
        <Container sx={{ width: '100%', typography: 'body1' }}>
            <h2>Orders: {orders.length}</h2>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHeadComponent></TableHeadComponent>
                    <TableBody>
                        {orders.map((row) => <SingleOrder
                            key={row._id}
                            row={row}
                        ></SingleOrder>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AllOrders;