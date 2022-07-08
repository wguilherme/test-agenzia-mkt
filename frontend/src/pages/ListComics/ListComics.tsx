import { Typography } from "@mui/material";
import {useState} from 'react'
import { ComicCard, ComicCardSkeletonList } from "@/components";
import { useEffect } from 'react'

export function ListComicsPage(){
  const [comics, setComics] = useState<number[]|null>(null);

  useEffect(()=>{
    setComics([1,2,3])
  },[])


  if(!comics) return <ComicCardSkeletonList/>
  return(
    <>
      {
        comics?.map((comic:any)=>(<ComicCard image="#" price={50} title="batman" description="any" />))
      }
    </>  
  )


}