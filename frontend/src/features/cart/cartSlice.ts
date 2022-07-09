import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: <any>[],
  },
  reducers: {
    addComicToCart: (state, actions) => {
      const {id} = actions.payload

      const alreadyInCart = state.cart.find((comicId:any) => comicId === id)

      if(!alreadyInCart) {
        const newCart:any = [...state.cart, id]
        state.cart = newCart
      }
    },
    removeComicFromCart: (state, actions) => {
      const {id} = actions.payload
      const newCart:any = state.cart.filter((item:any) => item !== id)
      state.cart = newCart
    },
    clearCart: (state) => {
      state.cart = []
    },
    cartQuantity: (state, actions) => {
      state.cart = actions.payload
    }
  },
})

export const { addComicToCart, cartQuantity } = cartSlice.actions
export default cartSlice.reducer