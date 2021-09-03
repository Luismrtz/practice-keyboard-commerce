import React, { useEffect, useState } from 'react'
import {FC} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { CartType } from '../../state/type';

import useStyles from './navbarStyles';


import {useAppDispatch, useAppSelector} from "../../hooks/dispApp";
import {RootState} from "../../state/store";
import {fetchCart, deleteCart } from '../../state/reducers/cartSlice';
import { Badge,AppBar, Container, Grid, Typography, IconButton, Toolbar  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CartItem } from '..';
import { Link } from 'react-router-dom';



type Anchor = 'right';

//needed for material ui
const anchor = 'right';

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state: RootState) => state.cart);

  const [state, setState] = useState({

    right: false,
  });


  useEffect(() => {
    dispatch(fetchCart());
}, [dispatch])


const EmptyCart = () => (
  <Typography variant="subtitle1">You have no items in your shopping cart!</Typography>
);


type PropTypeCart = {
  cart: CartType,
  // childCloseDrawer: () => void,
}

const FilledCart: FC<PropTypeCart> = ({cart}) => (
  <div >
      <Grid container spacing={3}>
          {cart.line_items?.map((item) =>(
              <>
              <Grid item xs={12} sm={12} key={item.id}>
                  <CartItem  
                  displayForNavbar={true}
                        // childCloseDrawer={toggleDrawer}
                      // onClick={toggleDrawer(anchor, false)}
                
                  item={item}/>
              </Grid>
      
              </>
          ))}
      </Grid>
      <div className={classes.cardDetails}>
                  <Typography variant="h4" gutterBottom>Subtotal: { cart.subtotal?.formatted_with_symbol}</Typography>
                  <div>
                      <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => dispatch(deleteCart())}> Empty Cart</Button>
                      <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                  </div>
      </div>
  </div>
)



  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
      <Container>
             <div className={classes.toolbar}></div>     
              <Typography className={classes.title} variant="h4">Your Cart</Typography> 
                { !cart.line_items?.length ? <EmptyCart /> : <FilledCart cart={cart} />} 
      </Container>
      </List>
      {/* <Divider /> */}
      {/*!!!! Replace this with CARTITEMS */}
      {/* <List></List> */}
      {/*!!!! Replace this with CARTITEMS */}
    </div>
  );

  let totalItems = cart.line_items?.length;

  return (
    <div>
    
      <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                        <Link to="/">
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={'/images/computer_640.jpg'} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js 
                    </Typography>
                        </Link>
                    <div className={classes.grow} />
                    <div className={classes.menuButton} 
                    // onClick={toggleCartFeature} 
                    data-mui-cy="testnav"
                    onClick={toggleDrawer(anchor, true)}
                     >
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
                       
            </AppBar>
      {/* calls the side drawer  */}
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer  anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
    </div>
  );
}
