import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {commerce} from "../lib/commerce";
import {Dispatch} from "react";


import {ProductType, productStateType, ActionType} from './type';




const productState: productStateType = {
    products: []
}

export const productsSlice = createSlice({
    name: 'fetch/products',
    initialState: productState,
    reducers: {
        // select: (state: productStateType, action:PayloadAction<ProductType[]>) => ({ products: action.payload })
        select: (state, {payload}:PayloadAction<ProductType[]>) => ({ products: payload })
    }
})

//* test for multiple default export
// export const psSlice = createSlice({
//     name: 'fetch/products',
//     initialState: productState,
//     reducers: {
//         select: (state: productStateType, action:PayloadAction<ProductType[]>) => ({ products: action.payload })
//     }
// })

// const { select } = productsSlice.actions

export const {
    select: selectProductActionCreator
} = productsSlice.actions

//* test for multiple default export
// export const {
//     select: selectPActionCreator
// } = psSlice.actions



export const fetchProducts = () => async (dispatch: Dispatch<ActionType>) =>{
    const { data } = await commerce.products.list();
    dispatch(selectProductActionCreator(data))
}









///?!!!!!!! CART SLIZE

// const initialState: InitialStateType = {
//     cart: {
//         id: number;
//     }
// }












////!!!!!!! EXPORT ALL 



export default (
    productsSlice.reducer
   //* test for multiple default export
    // psSlice.reducer

) 





