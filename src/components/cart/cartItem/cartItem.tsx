import React, {FC} from 'react'

import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import {useAppDispatch, useAppSelector} from "../../../hooks/dispApp";
import useStyles from './cartItemStyles';
import { ProductType } from '../../../state/type';
import { removeCartItem, UpdateCartQuantity } from '../../../state/reducers/cartSlice';

type PropType = {
    item: ProductType,
    displayForNavbar: boolean
    // childCloseDrawer: (value1: string, value2: boolean) => void;
}





const CartItem: FC<PropType> = ({item, displayForNavbar}) => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    // item2 = 'poop'
    // onClick={() => childCloseDrawer(anchor, false)}
    return (
        <div>
            {displayForNavbar ? (
                <>
                <div className={classes.flexwrapper}>
              

                <CardMedia image={item.media.source}  className={classes.mediaNav} />
               
      <div className={classes.navbtnWrapper}>
            <div className={classes.navCardContent}>   
            
            <Typography variant="h5" >{item.name}</Typography>
            {/* <Typography variant="h6">{item.line_total.formatted_width_symbol}</Typography> */}
        </div>
        <div >
            <div className={classes.buttonNav}>
                <Button type="button" size="small" onClick={() => dispatch(UpdateCartQuantity(item.id, item.quantity - 1))}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={() => dispatch(UpdateCartQuantity(item.id, item.quantity + 1))}>+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary" onClick={() => dispatch(removeCartItem(item.id))}>Remove</Button>
        </div>
      </div>

                </div>

        </>
            )
                : (
                    <>
                            <CardMedia image={item.media.source}  className={classes.media} />
        <CardContent className={classes.cardContent}>   
     
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h5">{item.line_total.formatted_width_symbol}</Typography>
        </CardContent>
        <CardActions>
            <div className={classes.buttons}>
                <Button type="button" size="small" onClick={() => dispatch(UpdateCartQuantity(item.id, item.quantity - 1))}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={() => dispatch(UpdateCartQuantity(item.id, item.quantity + 1))}>+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary" onClick={() => dispatch(removeCartItem(item.id))}>Remove</Button>
        </CardActions>
                    </>
                )
        }
    
            
        </div>
    )
}

export default CartItem

