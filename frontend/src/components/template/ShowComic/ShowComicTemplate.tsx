import { FavoriteBorder } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

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

  const {id, title, thumbnail, description, updatedAt, price} = comicData
  
  return(
    <Card sx={{mb:3}}>
      <CardMedia 
        component="img"
        height="194"
        image={thumbnail}
        alt={title}
      />   

      <CardContent >
        <Typography variant="body2" color="text.secondary">
          {`${description.slice(0, 100)}...` || "Descrição não disponível"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button fullWidth>Adicionar ao carrinho</Button>
        <Button fullWidth>
          <FavoriteBorder color="primary"/>
          Favoritar
          </Button>
        
      </CardActions>
    </Card>
  )
}