
//Fetch Products type

export type ProductType = {
    id: string
    name: string
    description: string
    media: {source: string}
    price: {formatted: string}
    line_total: {formatted_width_symbol: string}
    quantity: number
}

export type productStateType = {
    products: ProductType[]
}

export type ActionType = ReturnType<typeof selectProductActionCreator>








//? cart
export type CartType = {
    id: string | null
    subtotal: { formatted_with_symbol: string } | null;
    total_items: number | null
    line_items:  ProductType[] | null
    total_unique_items: number | null
}

export type cartInitialStateType = {
    cart: CartType
}


export type CartActionType = ReturnType<typeof setCart>




//? Address
export type AddressStateType = {
    countries: selectAddressType<string, string> | null ,
    token: TokenType | null,
    country: string | null

}

export type selectAddressType<key, value> = {
    key: value
}


// export type selectAddressResponseType = {
//     countries: SelectFieldDataType<string, string>
//     html: HTMLElement
// }


export type TokenType = {
    id: string
}




export type AddressActionType = ReturnType<typeof setToken> |
                                ReturnType<typeof setShippingCountries> |
                                ReturnType<typeof setShippingCountry>
                    
