import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: {},
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.items[action.payload.product.id]
            state.items[action.payload.product.id] = {
                item: action.payload.product,
                count: cartItem ? cartItem.count + action.payload.count : action.payload.count
            }
            state.total += +action.payload.product.price * action.payload.count
        },
        removeCartItem: (state, action) => {
            state.total -= state.items[action.payload].count * state.items[action.payload].item.price
            delete state.items[action.payload]
        },
        plusCartItem: (state, action) => {
            state.items[action.payload.id].count += action.payload.count
            state.total += state.items[action.payload.id].item.price * action.payload.count
        },
        minusCartItem: (state, action) => {
            const count = state.items[action.payload.id].count -= action.payload.count
           if(count <= 0) {
               state.total -= state.items[action.payload.id].count * state.items[action.payload.id].item.price
               delete state.items[action.payload.id]
           } else {
               state.items[action.payload.id].count = count
               state.total -= state.items[action.payload.id].item.price * action.payload.count
           }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCartItem, plusCartItem, minusCartItem } = cartSlice.actions

export default cartSlice.reducer