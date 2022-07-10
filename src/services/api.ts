import axios from 'axios'

import  {addMock, enableMocking} from '@/utils'

addMock('http://localhost:4000/coupons', { data: [
  {
  code: 'AG3NZ1A',
  type: 'raro',
  discount: 90
  },
  {
  code: 'ANY22',
  type: 'comum',
  discount: 10
  },
  {
  code: 'ANY55',
  type: 'comum',
  discount: 25
  }
]})

enableMocking(true)

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'  
})