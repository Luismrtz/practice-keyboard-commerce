import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';

import {useAppDispatch, useAppSelector} from "../../hooks/dispApp";
import {RootState} from "../../state/store";
import {fetchCart } from '../../state/reducers/cartSlice';
// import classes from '*.module.css';

import useStyles from './navbarStyles';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state: RootState) => state.cart)

    console.log(cart);
    console.log(cart.line_items);
    let totalItems = cart.line_items?.length;
    // let newTotalItems = 

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch])

    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={'/images/computer_640.jpg'} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.menuButton}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
