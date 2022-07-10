import { Typography } from "@mui/material";
import { ComicCard, ComicCardSkeletonList } from "@/components";
import { useComics } from "@/services";

export function ListComicsPage(){

  const {data: comics, isLoading, error} = useComics()

  if(isLoading) return <ComicCardSkeletonList/>
  if (error) return <Typography>Falha ao obter dados deste quadrinho</Typography>

  return(
    <>
      {comics?.map((comic:any)=>(<ComicCard key={comic.id} comicData={comic} />))}
    </>  
  )
}