import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: <any>[]
  },
  reducers: {
    toggleFavorite: (state, actions) => {

      const id = actions.payload
      const alreadyInFavorites = state.favorites.find((comicId:any) => comicId === id)

      if(alreadyInFavorites) {
        const newFavorites = state.favorites.filter((comicId:any)=> comicId !== id)
        state.favorites = newFavorites  
      } 
      
      else {
        const newFavorites:any = [...state.favorites, id]
        state.favorites = newFavorites
      }
    }
  },
})

export const { toggleFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer