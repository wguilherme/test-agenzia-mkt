import { CartListItem, PaymentSuccess, FavoriteListItem } from "@/components";
import { useComics } from "@/services";
import { Alert, Box, Button, List, Paper, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { UserContext } from '@/contexts'
import { useContext, useState } from "react";

export function FavoritesPage(){
  const { userPurchases, setUserPurchases } = useContext(UserContext)
  const [userPaid, setUserPaid] = useState(false)

  const { favorites } = useSelector((state: any) => state.favorite)
  const {data: comics, isLoading, error} = useComics()

  const comicsInFavorites = comics?.filter((comic: any) => favorites.includes(comic.id))

  if (isLoading) return <Typography>Carregando favoritos...</Typography>
  if (error) return <Typography>Falha ao obter favoritos</Typography>
  if(favorites?.length === 0) return (<Alert severity="info">Nenhum produto adicionado aos favoritos.</Alert>
  )

  if(userPaid) return <PaymentSuccess/>
  else return(
    <>
    <List>
      {
        comicsInFavorites?.map((comic: any) => (<FavoriteListItem key={comic.id} comicItem={comic} />))
      }
    </List>
    </>
  )
}