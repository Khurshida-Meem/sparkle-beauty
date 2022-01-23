import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const TableHeadComponent = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>Action</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeadComponent;