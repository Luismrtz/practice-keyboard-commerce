import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/cartSlice';
import { fetchAddressSlice } from './reducers/fetchAddressSlice';
import { 
    productsSlice,
    //* test for multiple default export
    //  psSlice 
    } from "./redux-toolkit";

// import { cartSlice } from "./cartSlice";
// import { selectFieldSlice } from "./selectFieldSlice";
// import { checkoutSlice } from "./checkoutSlice";




// const rootReducer = combineReducers({
//     // products: productsSlice.reducer,
//     // cart: cartSlice.reducer,
//     // fieldsData: selectFieldSlice.reducer,
//     // order: checkoutSlice.reducer
// })

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        //* test for multiple default export
        // p: psSlice.reducer
        addressData: fetchAddressSlice.reducer,
        cart: cartSlice.reducer
    },
    // middleware: [...getDefaultMiddleware({})]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch