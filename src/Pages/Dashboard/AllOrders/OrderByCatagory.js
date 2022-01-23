import React from 'react';
import { Button, Container } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OrderByCatagory = () => {
    return (
        <Container sx={{ width: '100%', typography: 'body1' }}>
            <Tabs>
                <TabList>
                    <Tab>Pending</Tab>
                    <Tab>Shipped</Tab>
                    <Tab>Cancelled</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </Container>
    );
};

export default OrderByCatagory;