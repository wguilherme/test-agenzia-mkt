import {useQuery} from 'react-query';
import { api } from '@/services'

const oneSecond = 1000 // 1 second in milliseconds
const oneMinute = oneSecond * 60;

type Comic = {
  id: number
  title: string
  description: string
  thumbnail: string
  price: number
}

export async function getComics(): Promise<Comic[]>{ 

  const {data: { data }} = await api.get('/comics', {
    params: {
      ts: 1,
      apikey: String(import.meta.env.VITE_MARVEL_API_PUBLIC),
      hash:  String(import.meta.env.VITE_MARVEL_HASH),
      limit: 100
    }
  })

  const comics = 
  data.results.filter((comic:any) => comic.description !== null && comic.description !== '')
    .map((comic:any) => {
      return {
        id: comic.id,
        title: comic.title,
        description: comic.description,
        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        price: comic?.prices[0]?.price || 49.90
      }
    })  
  return comics
}

export function useComics(){
  return useQuery('comics', getComics, 
    {
      staleTime: oneMinute * 10
    }
  )
}