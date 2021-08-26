import React, {FC} from 'react'

import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import useStyles from './cartItemStyles';
import { ProductType } from '../../../state/type';

type PropType = {
    item: ProductType
}



const CartItem: FC<PropType> = ({item}) => {
    const classes = useStyles();


    return (
        <div>
            <CardMedia image={item.media.source}  className={classes.media}/>
            <CardContent className={classes.cardContent}>   
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_width_symbol}</Typography>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                    
                </div>
            </CardActions>
            
        </div>
    )
}

export default CartItem
