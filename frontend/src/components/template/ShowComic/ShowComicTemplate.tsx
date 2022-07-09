import { FavoriteBorder } from "@mui/icons-material";
import { Paper,Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addComicToCart } from '@/features';

interface PropsInterface {
  comicData: {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    updatedAt: string;
    price: number;    
  },
}

export function ShowComicTemplate({comicData}: PropsInterface){

  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const {id, title, thumbnail, description, updatedAt, price} = comicData
  
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
      </CardContent>

      <CardActions>
        <Box display="flex" flexDirection="column" gap={1} flex="1">
        <Button fullWidth variant="contained"
        onClick={() => dispatch(addComicToCart({id}))} 
        >Adicionar ao carrinho</Button>
        <Button fullWidth variant="outlined" sx={{display: 'flex', gap:1}}>
          <FavoriteBorder color="primary"/>
          Favoritar
          </Button>
        
        </Box>
      </CardActions>
    </Paper>
  )
}