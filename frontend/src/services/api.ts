import axios from 'axios'

import  {addMock, enableMocking} from '@/utils'

addMock('http://localhost:4000/coupons', { data: [
  {
  code: '2233',
  type: 'raro',
  discount: 10
  },
  {
  code: '5530',
  type: 'comum',
  discount: 30
  },
  {
  code: '9988',
  type: 'comum',
  discount: 30
  }
]})

enableMocking(true)

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'  
})