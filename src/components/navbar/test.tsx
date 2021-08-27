import React, { useEffect, useState } from 'react'
import {FC} from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, Grid, Button, Container } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';

import { CartType } from '../../state/type';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';




import {useAppDispatch, useAppSelector} from "../../hooks/dispApp";
import {RootState} from "../../state/store";
import {fetchCart } from '../../state/reducers/cartSlice';
// import classes from '*.module.css';

import useStyles from './navbarStyles';
import { CartItem } from '..';
// import NavCartSection from './navCartSection/navCartSection';


export type NavCartType = { 
    toggleCart: boolean
}

const Testing = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state: RootState) => state.cart);

    const [toggleCart, setToggleCart] = useState({
        right: false,
    });


    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch])

    // const [state, setState] = useState({
    //     // top: false,
    //     // left: false,
    //     // bottom: false,
    //     right: false,
    //   });



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















    //   type slider = 'right';




      const toggleDrawer = (slider: any, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setToggleCart({ ...toggleCart, [slider]: open });
      };

      const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart!</Typography>
    );

      const list = (slider: any) => (
        <div
          className={clsx(classes.list
            // [classes.fullList]: slider === 'top' || slider === 'bottom',
          )}
          role="presentation"
        //   onClick={toggleDrawer(false)}
        //   onKeyDown={toggleDrawer(false)}
        >
           {/*!!!! delete this */}
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          {/*!!!! delete this */}
          <Divider />
          {/*!!!! Replace this with CARTITEMS */}
          <List>
            {/* {['All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={index}>
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
          {/* <List>
            {['All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          {/*!!!! Replace this with CARTITEMS */}
        </div>
      );




    console.log(cart);
    console.log(cart.line_items);
    let totalItems = cart.line_items?.length;
    // let newTotalItems = 



    // const toggleCartFeature = () => {
    //     setToggleCart(!toggleCart)
    // }

    const NavCart = (
        // {toggleCart}
        // slider
        ) => {
        const classes = useStyles();
    
        return (
            <div>
                {/* {toggleCart && 
                <>            
                    <div className={classes.navCartWrapper}>
                       <NavCartSection/>
                    </div>
                </>
             } */}
         <Drawer
          anchor="right" 
        //  slider='right'
          open={toggleCart.right} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>

            </div>
    
        )
    }



    return (
        <div>
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

            
            <NavCart 
            // toggleCart={toggleCart}
            />
        </div>
    )
}

export default Testing
