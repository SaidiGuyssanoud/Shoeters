import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography,IconButton } from "@material-ui/core";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from './Styles';
// import { ClassNames } from '@emotion/react';

function ShoppingCart(props) {
    const classes = useStyles();

  return (
    <Card className={classes.root} >
        <CardMedia className={classes.media} image={props.image} title={props.name} />
        <CardContent>
            <div className="classes-cardContent">
                <Typography variant="h5" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="h5">
                    {props.price}
                </Typography>
            </div>
                <Typography variant="h2" color="textSecondary">
                    {props.description}
                </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardAction}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCartIcon />
                </IconButton>
        </CardActions>
    </Card>
  )
}

export default ShoppingCart