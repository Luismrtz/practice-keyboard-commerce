import * as React from 'react';
import {FC} from "react";
import dompurify from 'dompurify';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import useStyles from "./productStyles"
import {AddShoppingCart} from "@material-ui/icons";
import {useAppDispatch, useAppSelector} from "../../../hooks/dispApp";
import {addToCart} from "../../../state/reducers/cartSlice";
import {ProductType} from "../../../state/type";
//TODO !! CHANGE THE CSS NAMES
//TODO !! DO I NEED 'JSX.Element'???
//TODO CHANGE PROPS NAME
//TODO CHANGE FC to REACT.FC

type Props = {
    product: ProductType
};


// const Product: FC<Props> = ({product}): JSX.Element => {
const Product: FC<Props> = ({product}) => {
    const dispatch = useAppDispatch()
    const classes = useStyles();
     const sanitizer = dompurify.sanitize;

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${product.price.formatted}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: sanitizer(product.description) }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton   data-mui-cy="testAddToCart" aria-label="Add to Cart" onClick={() => dispatch(addToCart(product.id, 1))} >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default Product
