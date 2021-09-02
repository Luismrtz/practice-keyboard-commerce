import React, { useEffect } from 'react'
import {FC} from 'react';
import useStyles from './cartStyles';
import {Container, Typography, Button, Grid } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../hooks/dispApp';
import { RootState } from '../../state/store';
import { fetchCart } from '../../state/reducers/cartSlice';
import CartItem from './cartItem/cartItem';
import { CartType } from '../../state/type';

import { deleteCart } from '../../state/reducers/cartSlice';
import { Link } from 'react-router-dom';


const CartSection = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state: RootState) => state.cart)

    
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch])

    
    // isEmtpy = cart.line_items.length === 0; aka lenth === 0 is true
    // const isEmpty = !cart.line_items?.length;

    //function returning some jsx
    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart!</Typography>
    );


    //! filter example. 1
    //! const filterSomething = fruitBowl.filter((fruit) => fruit === chosenFruit); //chosenFruit = apples; ONLY keep apples.


    //!filter example 2 (switch case)
    //! useEffect(() => {
    //     let newItems = itemsToFilter.filter((filt) => {
    //       switch (sort) {
    //         case "a":
    //           return filt.type === "a";
    //         case "b":
    //           return filt.type === "b";
    //         case "c":
    //           return filt.type === "c";
    //         default:
    //           return null;
    //       }
    //     });
    //     setFilter(newItems);
    
    //     const handleWindowResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleWindowResize);
    //     return () => {
    //       window.removeEventListener("resize", handleWindowResize);
    //     };
    //   }, [sort]);



type PropTypeCart = {
    cart: CartType;
}

    const FilledCart: FC<PropTypeCart> = ({cart}) => (
        <>
            <Grid container spacing={3}>
                {cart.line_items?.map((item) =>(
                    <>
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem displayForNavbar={false} item={item}/>
                        {/* <div>{item.name}</div> */}
                    </Grid>
            
                    </>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4" gutterBottom>Subtotal: { cart.subtotal?.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"
                        onClick={() => dispatch(deleteCart())}> Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    )

    // if(!cart.line_items) return <>'Loading....'</>;
    return !cart.line_items ? <>'Loading...'</> :  (
        <Container>
                <div className={classes.toolbar}></div>     
                <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography> 
                { !cart.line_items?.length ? <EmptyCart /> : <FilledCart cart={cart} />} 
        </Container>
    )
}

export default CartSection;
