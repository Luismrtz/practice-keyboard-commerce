import {commerce} from "../../lib/commerce";
import {Dispatch} from "react";
import {AddressStateType, AddressActionType, selectAddressType, TokenType} from "../type"
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

//? a variable has been declared, but has not yet been assigned a value
// undefined is a type itself(undefined)
//?  null is an assignment value... it can be assigned to a varaible as a representation of no value...
//null represents intentional absence of value/intentially not set value.
// TypeScript does not automatically make a variable null. 
///
// null is a TYPE object, with a valid value, no properties, is non-mutable. 
//ex. var testVal = null; //Variable declared and assigned a value of null
// alert(testVal); //shows null
//alert(typeof testVal); //shows object

//? also note: NULL is converted to zero(0) when performing primitive operations, NVM NOT false by nature...stupid
//? UNDEFINED is converted to NaN in primitivie operations
//ex. var undefinedVar;
//    var nullVar = null;

//    undefinedVar + 100; // NaN
//    nullVar + 100;      // 100

//? ex. cont
//? "foo" is a string
//? true is boolean
//? 1234 is a number
//? null is undefined


const initialState: AddressStateType = {
    countries: null,
    token: null,
    country: null
}

export const fetchAddressSlice = createSlice({
    name: 'addressData',
    initialState,
    reducers: {
        setToken: (state, {payload}: PayloadAction<TokenType>) =>({...state, token: payload}),
        setShippingCountries: (state, {payload}: PayloadAction<selectAddressType<string, string>>) => ({...state, countries: payload}),
        setShippingCountry: (state, {payload}: PayloadAction<string>) => ({...state, country: payload})
    }
})

export const fetchShippingCountries = (tokenId: string) => async(dispatch: Dispatch<AddressActionType>) => {
    const { countries } = await commerce.services.localeListShippingCountries(tokenId)
    dispatch(setShippingCountries(countries))
    dispatch(setShippingCountry(Object.keys(countries)[0]))
    //  console.log(countries);
}

export const generateToken = (cartId: string) => async (dispatch: Dispatch<AddressActionType>) => {
    try {
        const token = await commerce.checkout.generateToken(cartId, {type: 'cart'});
        dispatch(setToken(token))
        // console.log(token);
        // console.log(token);
    } catch(error) {

    }
}
export const getToken = () => async (dispatch: Dispatch<AddressActionType>) => {
    const token  = await commerce.checkout.getToken()
    dispatch(setToken(token))
    //   console.log(cart);
}


export const {
    setToken,
    setShippingCountries,
    setShippingCountry

} = fetchAddressSlice.actions