import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

interface PropsInterface {
  comicData: {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    updatedAt: string;
    price: number;
  } | any
}

export function ComicCard({comicData}: PropsInterface){

  const {id, title, thumbnail, description, updatedAt, price} = comicData
  const {cart} = useSelector((state: any) => state.cart)

  const navigate = useNavigate()

  function handleShowComicDetails(comicId:number){ console.log('comicId',id); navigate(`/comics/${comicId}`) }

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

      <CardActions sx={{justifyContent: 'space-between', py:3, px:2}}>
        <Button size="small">Adicionar ao carrinho</Button>
        <Button size="small" onClick={()=>handleShowComicDetails(id)}>Detalhes</Button>
        <FavoriteBorder color="primary"/>
      </CardActions>
    </Card>
  )
} 

export function ComicCardSkeleton(){
  return(
    <>
    <Skeleton variant="rectangular"height={118} />
    <Skeleton variant="text" height={30} />
    <Skeleton variant="text" height={30} />
    <Skeleton variant="text" height={30} />
    <Box display="flex" justifyContent={"flex-end"} gap={2}>
    <Skeleton variant="text" width={100} height={48}/>
    <Skeleton variant="text" width={100} height={48}/>
    </Box>
    </>
  )
}

export function ComicCardSkeletonList(){
  const list = [1,2,3,4,5,6,7,8,9,10]
  return(<>{list.map((item:any)=>(<ComicCardSkeleton key={item}/>))}</>)
}
