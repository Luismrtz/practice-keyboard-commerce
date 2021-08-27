import React, { useEffect, useState } from 'react'
import {FC} from 'react';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { CartType } from '../../state/type';

import useStyles from './navbarStyles';


import {useAppDispatch, useAppSelector} from "../../hooks/dispApp";
import {RootState} from "../../state/store";
import {fetchCart } from '../../state/reducers/cartSlice';
import { Badge,AppBar, Container, Grid, Typography, IconButton, Toolbar  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CartItem } from '..';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

type Anchor = 'right';

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state: RootState) => state.cart);

  const [state, setState] = useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });


  useEffect(() => {
    dispatch(fetchCart());
}, [dispatch])


const EmptyCart = () => (
  <Typography variant="subtitle1">You have no items in your shopping cart!</Typography>
);


type PropTypeCart = {
  cart: CartType;
}

const FilledCart: FC<PropTypeCart> = ({cart}) => (
  <div >
      <Grid container spacing={3}>
          {cart.line_items?.map((item) =>(
              <>
              <Grid item xs={12} sm={12} key={item.id}>
                  <CartItem item={item}/>
                  {/* <div>{item.name}</div> */}
              </Grid>
      
              </>
          ))}
      </Grid>
      <div className={classes.cardDetails}>
                  <Typography variant="h4" gutterBottom>Subtotal: { cart.subtotal?.formatted_with_symbol}</Typography>
                  <div>
                      <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"> Empty Cart</Button>
                      <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
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
      className={clsx(classes.list, {
        // [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    >
       {/*!!!! delete this */}
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}


<Container>
                <div className={classes.toolbar}></div>     
                <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography> 
                { !cart.line_items?.length ? <EmptyCart /> : <FilledCart cart={cart} />} 
        </Container>
      </List>
      {/*!!!! delete this */}
      <Divider />
      {/*!!!! Replace this with CARTITEMS */}
      <List>
        {/* {['All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      {/*!!!! Replace this with CARTITEMS */}
    </div>
  );

  let totalItems = cart.line_items?.length;

  return (
    <div>
      {/* I dont need this from here...  */}
      <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={'/images/computer_640.jpg'} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js 
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.menuButton} 
                    // onClick={toggleCartFeature} 
                    onClick={toggleDrawer("right", true)}
                     >
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
                       
            </AppBar>
      {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => ( 
        <React.Fragment key={anchor}>
           {/* to here...  */}
           {/* Just assign this onClick to navbar...  */}
          <Button onClick={toggleDrawer('right', true)}>{anchor}</Button>
          <Drawer anchor='right' open={state[anchor]} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
