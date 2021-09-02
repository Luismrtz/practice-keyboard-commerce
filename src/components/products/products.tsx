import * as React from 'react';
import {FC, useEffect} from "react";
import Grid from "@material-ui/core/Grid"
import Product from "./product/product";
import useStyles from "./productsStyles"
import {useAppDispatch, useAppSelector} from "../../hooks/dispApp";

import {RootState} from "../../state/store";
import {fetchProducts} from "../../state/redux-toolkit";
import { Button } from '@material-ui/core';

import { fetchCart } from '../../state/reducers/cartSlice';


//TODO !! CHANGE THE CSS NAMES
//TODO !! DO I NEED 'JSX.Element'???
//TODO CHANGE PROPS NAME
//TODO CHANGE FC to REACT.FC


// type Props = {

// };

// const Products: FC<Props> = (): JSX.Element => {
const Products: FC = () => {
    const { products } = useAppSelector((state: RootState) => state.products)
    const dispatch = useAppDispatch();

    // const { cart } = useAppSelector((state: RootState) => state.cart)

    // console.log(cart);
    // console.log();

    // console.log(products)
    // console.log(products[0])
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCart());
        // console.log(cart);
     
    }, [dispatch])

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div  className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product, index) => <Grid key={index} item xs={12} sm={6} md={4}>
                    <Product product={product}/>
                </Grid>)}
            </Grid>

        </main>
    )
}

export default Products