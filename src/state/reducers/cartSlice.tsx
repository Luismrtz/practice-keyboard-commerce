import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {commerce} from "../../lib/commerce";
import {Dispatch} from "react";
import {CartType, cartInitialStateType, CartActionType} from "../type"



const initialState: cartInitialStateType = {
    
    cart: {
        //based on commerce prop/prototypes.
        id: null,
        subtotal: null,
        total_items: null,
        line_items: null,
        total_unique_items: null,
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // setCart:(state: cartInitialStateType, action: PayloadAction<CartType[]>) => ({...state, cart: action.payload})
        setCart:(state, {payload}: PayloadAction<CartType>) => ({...state, cart: payload})
    }
})



// export const { setCart } = cartSlice.actions

export const fetchCart = () => async (dispatch: Dispatch<CartActionType>) => {
    const cart  = await commerce.cart.retrieve()
    dispatch(setCart(cart))
    //   console.log(cart);
}

export const addToCart = (productId: string, quantity: number) => async (dispatch: Dispatch<CartActionType>) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    dispatch(setCart(cart))
  

}

export const UpdateCartQuantity = (productId: string, quantity: number) => async (dispatch: Dispatch<CartActionType>) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    dispatch(setCart(cart))
}

export const removeCartItem = (productId: string) => async (dispatch: Dispatch<CartActionType>) => {
    const { cart } = await  commerce.cart.remove(productId)
    dispatch(setCart(cart))
}



// Types

// type CartActionType = ReturnType<typeof setCart>



// type InitialStateType = {
//     cart: CartType
// }


export const deleteCart = () => async (dispatch: Dispatch<CartActionType>) => {
    const { cart } = await  commerce.cart.empty()
    dispatch(setCart(cart))
    
}





export const {
    // setCart: selectCartActionCreator
    setCart,
} = cartSlice.actions
