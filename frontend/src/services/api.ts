import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'  
})

export async function getComics(){
  const response = await api.get('/comics', {
    params: {
      ts: 1,
      apikey: String(import.meta.env.VITE_MARVEL_API_PUBLIC),
      hash:  String(import.meta.env.VITE_MARVEL_HASH),
      limit: 100
    }
  })
  return response.data.data.results
}
