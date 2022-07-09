import { CartListItem, PaymentSuccess, FavoriteListItem } from "@/components";
import { useComics } from "@/services";
import { Alert, Box, Button, List, Paper, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { UserContext } from '@/contexts'
import { useContext, useState } from "react";

export function PurchasesPage(){
  const { userPurchases, setUserPurchases } = useContext(UserContext)
  // const {data: comics, isLoading, error} = useComics()

  // if (isLoading) return <Typography>Carregando favoritos...</Typography>
  // if (error) return <Typography>Falha ao obter favoritos</Typography>
  if(userPurchases?.length === 0) return (<Alert severity="info">Você ainda não realizou nenhuma compra</Alert>)
  else return(
    <>
    <List>
      {
        userPurchases?.map((comic: any) => (<FavoriteListItem key={comic.id} comicItem={comic} />))
      }
    </List>
    </>
  )
}