import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: <any>[],
    payments: <any>[]
  },
  reducers: {
    addComicToCart: (state, actions) => {
      const id = actions.payload

      const alreadyInCart = state.cart.find((comicId:any) => comicId === id)

      if(!alreadyInCart) {
        const newCart:any = [...state.cart, id]
        state.cart = newCart
      }
    },
    removeComicFromCart: (state, actions) => {
      const id = actions.payload
      const newCart = state.cart.filter((comicId:any) => comicId !== id)
      state.cart = newCart
    },
    orderComic: (state, actions) => {
      const id = actions.payload

      const newPayment = {
        products: state.cart,
        date: new Date(),
      }
      
      const newPayments = [...state.payments]

      state.payments = newPayments
    }
  },
})

export const { addComicToCart, removeComicFromCart } = cartSlice.actions
export default cartSlice.reducer