import React, { useEffect, useState } from 'react';
import { Container, Paper, Table, TableBody, TableContainer } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableHeadComponent from './TableHeadComponent';
import SingleOrder from './SingleOrder';

const OrderByCatagory = () => {

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

    const pendingOrders = orders.filter(order => order.status === 'Pending');
    const cancelledOrders = orders.filter(order => order.status === 'Cancelled');
    const shippedOrders = orders.filter(order => order.status === 'Shipped');


    return (
        <Container sx={{ width: '100%', typography: 'body1' }}>
            <Tabs>
                <TabList>
                    <Tab>Pending</Tab>
                    <Tab>Shipped</Tab>
                    <Tab>Cancelled</Tab>
                </TabList>

                {/* ===================== Pending tab ========================== */}
                <TabPanel>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="Appointments table">
                            <TableHeadComponent></TableHeadComponent>
                            <TableBody>
                                {pendingOrders.map((row) => <SingleOrder
                                    key={row._id}
                                    row={row}
                                ></SingleOrder>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* ==================== Shipped Tab ========================== */}
                <TabPanel>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="Appointments table">
                            <TableHeadComponent></TableHeadComponent>
                            <TableBody>
                                {shippedOrders.map((row) => <SingleOrder
                                    key={row._id}
                                    row={row}
                                ></SingleOrder>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* =========================== Cancelled Tab ========================== */}
                <TabPanel>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="Appointments table">
                            <TableHeadComponent></TableHeadComponent>
                            <TableBody>
                                {cancelledOrders.map((row) => <SingleOrder
                                    key={row._id}
                                    row={row}
                                ></SingleOrder>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </Tabs>
        </Container>
    );
};

export default OrderByCatagory;