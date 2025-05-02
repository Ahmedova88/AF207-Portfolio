import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        updateBasket: (state, action) => {
            console.log(action.payload);
            let existProduct = state.basket.find((product) => product.id == action.payload.id)
            if (existProduct) {
                existProduct.count += 1
            } else {
                state.basket.push({ ...action.payload, count: 1 })
            }
        },

        incrementCount: (state, action) => {
            const product = state.basket.find(item => item.id === action.payload.id)
            if (product) {
              product.count += 1
            }
          },

        decrementCount: (state, action) => {
            const product = state.basket.find(item => item.id === action.payload.id)
            if (product) {
              if (product.count > 1) {
                product.count -= 1
              } else {
                state.basket = state.basket.filter(item => item.id !== product.id)
              }
            }
        },  

        clearBasket: (state) => {
            state.basket = []
        }
    }
})

export default basketSlice.reducer

export const { updateBasket, incrementCount, decrementCount, clearBasket } = basketSlice.actions