import {  PaymentSuccess, FavoriteListItem } from "@/components";
import { useComics } from "@/services";
import { Alert,List, Typography } from "@mui/material";
import { useSelector } from 'react-redux';

export function FavoritesPage(){

  const { favorites } = useSelector((state: any) => state.favorite)
  const {data: comics, isLoading, error} = useComics()

  const comicsInFavorites = comics?.filter((comic: any) => favorites.includes(comic.id))

  if (isLoading) return <Typography>Carregando favoritos...</Typography>
  if (error) return <Typography>Falha ao obter favoritos</Typography>
  if(favorites?.length === 0) return (<Alert severity="info">Nenhum produto adicionado aos favoritos.</Alert>
  )
  else return(
    <List>
      {
        comicsInFavorites?.map((comic: any) => (<FavoriteListItem key={comic.id} comicItem={comic} />))
      }
    </List>
  )
}