import { FavoriteBorder } from "@mui/icons-material";
import { Paper,Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addComicToCart, removeComicFromCart, toggleFavorite } from '@/features';
import { FavoriteButton } from "@/components";

interface PropsInterface {
  comicData: {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    price: number;    
  },
}

export function ShowComicTemplate({comicData}: PropsInterface){

  const { cart } = useSelector((state: any) => state.cart)

  const dispatch = useDispatch()

  const {id, title, thumbnail, description, price} = comicData

  function handleAddComicToCart(){dispatch(addComicToCart(id))}
  
  function handleRemoveComicFromCart(){dispatch(removeComicFromCart(id))}
  
  return(
    <Paper sx={{p:0}} elevation={10}>

      <CardMedia 
        component="img"
        width="100%"
        image={thumbnail}
        alt={title}
      />   

      <CardContent >

        <Typography variant="h6">
          Saiba mais:
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {`${description}` || "Descrição não disponível"}
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{mt:3}}>
            Preço: R$ {price}
        </Typography>

      </CardContent>

      <CardActions>

        <Box display="flex" flexDirection="column" gap={1} flex="1">

          {
          cart?.includes(id) ?
          <Button   variant="outlined" onClick={handleRemoveComicFromCart}>
            Remover do carrinho
          </Button>
          : 
          <Button variant="contained" onClick={handleAddComicToCart}>
            Adicionar ao carrinho
          </Button>
          }

          <FavoriteButton comicId={id}/>

        </Box>
      </CardActions>
    </Paper>
  )
}