
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

