import { CartListItem } from "@/components";
import { useComics } from "@/services";
import { List, Typography } from "@mui/material";
import { useSelector } from 'react-redux';

export function CartPage(){

  const { cart } = useSelector((state: any) => state.cart)
  const {data: comics, isLoading, error} = useComics()

  const coimicsInCart = comics?.filter((comic: any) => cart.includes(comic.id))

  console.log('cart', cart, coimicsInCart)

  return(
    <List>
      {
      coimicsInCart?.map((comic: any) => (<CartListItem key={comic.id} comicItem={comic} />))
      }
    </List>
  )
}