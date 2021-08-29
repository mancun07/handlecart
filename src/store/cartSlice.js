import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
        totalQuantity:0,
        postRequestIsNeeded: false
    },
    reducers: {
        updatedReduxStore(state, action) {
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            state.totalAmount = state.totalAmount + action.payload.price
            state.totalQuantity++;
            const existingItem = state.items.find(el => el.id === action.payload.id)
            if (existingItem) {
                existingItem.totalPrice = existingItem.totalPrice + action.payload.price
                existingItem.quantity++;
            } else {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price
                })
            }
            state.postRequestIsNeeded = true
        },
        removeItemFromCart(state, action) {
            const existingItem = state.items.find(el => el.id === action.payload)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(el => el.id !== action.payload)
            } else {
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                existingItem.quantity--;
            }
            state.totalAmount = state.totalAmount - existingItem.price
            state.totalQuantity--;
            state.postRequestIsNeeded = true
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice