import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ComicCardSkeleton, ShowComicTemplate } from '@/components';
import { useComics } from '@/services';
import { Typography } from '@mui/material';

export function ShowComicsPage(){

  const { comicId } = useParams();
  const [comicDetails, setComicDetails] = useState<any>()  
  const {data: comics, isLoading, error} = useComics()
  
  useEffect(()=>{
    const selectedComic = comics?.find((comic:any)=> comic.id == comicId)
    setComicDetails(selectedComic)
  },[comicId])

  if(isLoading || !comicDetails) return <ComicCardSkeleton/>
  if (error) return <Typography>Falha ao obter dados deste quadrinho</Typography>

  return(
    <><ShowComicTemplate comicData={comicDetails}/></>
  )
}