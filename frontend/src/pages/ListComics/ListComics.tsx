import { Typography } from "@mui/material";
import {useState} from 'react'
import { ComicCard, ComicCardSkeletonList } from "@/components";
import { useEffect } from 'react'
import { useQuery } from "react-query";
import { api, getComics} from "@/services";

export interface ComicInterface {
  id: number
  title: string
  description: string
  thumbnail: string
  price: number
  updatedAt: string
}

export function ListComicsPage(){

  const {data: comics, isLoading, error} = useQuery('users', async()=>{
    const getAllComics = await getComics()
    console.log('getAllComics', getAllComics)

    const processedComics = getAllComics?.filter((comic:any)=>{
      return comic.description !== null && comic.description?.length > 0
    }).map((comic:any) => {
      return {
        id: comic.id,
        title: comic.title,
        description: comic.description,
        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        price: comic?.prices[0]?.price || 0,
        updatedAt: new Date(comic.modified).toLocaleDateString('pt-BR', 
        { 
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })}
    })

    console.log('processedComics', processedComics)
    return processedComics 
  })

  

  if(!comics) return <ComicCardSkeletonList/>
  return(
    <>
      {
        comics?.map((comic:any)=>(<ComicCard key={comic.id} thumbnail={comic.thumbnail} price={50} title={comic.title} description={comic.description} />))
      }
    </>  
  )
}