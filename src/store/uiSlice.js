import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsShown: false
    },
    reducers: {
        toggleCart(state,action) {
            state.cartIsShown = !state.cartIsShown
        }
    }
})

export const uiActions = uiSlice.actions


export default uiSlice



