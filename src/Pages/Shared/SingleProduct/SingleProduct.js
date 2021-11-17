import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SingleProduct = (props) => {
    const { product } = props;
    const { name, shortDesc, thumb } = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={thumb}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shortDesc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" style={{ backgroundColor: '#c3f0ca', color: '#33272a', fontWeight: 'bold' }}>Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;