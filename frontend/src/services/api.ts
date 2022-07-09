import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'  
})
export const apiMock = axios.create({
  baseURL: 'http://localhost:3000/mock'  
})

