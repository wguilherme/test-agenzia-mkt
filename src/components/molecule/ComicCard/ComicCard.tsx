import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { addComicToCart, removeComicFromCart } from "@/features";
import { FavoriteButton } from "@/components";

interface PropsInterface {
  comicData: {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    price: number;
  } | any
}

export function ComicCard({comicData}: PropsInterface){
  const {id, title, thumbnail, description, price, type} = comicData
  const {cart} = useSelector((state: any) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleShowComicDetails(){navigate(`/comics/${id}`)}
  function handleAddComicToCart(){dispatch(addComicToCart(id))}
  function handleRemoveComicFromCart(){dispatch(removeComicFromCart(id))}

  return(
    <Card sx={{mb:3, position: 'relative'}}>
      
      <Chip sx={{
        position: 'absolute',
        top: "12px",
        right: "12px",
        backgroundColor: type === 'Especial' ? '#202024' : 'white',
        color: type === 'Especial' ? 'white' : 'gray',
        fontSize: '14px',
        fontWeight: 'bold',
        
        }} label={type} />
      
      <CardMedia 
       onClick={handleShowComicDetails}
        component="img"
        height="194"
        image={thumbnail}
        alt={title}
      />   

      <CardContent >
        <Typography variant="body1" color="text.secondary">
          {`${description.slice(0, 70)}...` || "Descrição não disponível"}
        </Typography>
        <Typography variant="h6" sx={{fontWeight:'bold', mt:2}}>
            R$ {price.toFixed(2).replace('.', ',')}
        </Typography>
      </CardContent>

      <CardActions sx={{justifyContent: 'space-between', pb:2, px:2}}>
          {
          cart?.includes(id) ?
          <Button onClick={handleRemoveComicFromCart}>
            Remover do carrinho
          </Button>
          : 
          <Button variant="outlined"  color="primary" onClick={handleAddComicToCart}>
            Adicionar ao carrinho
          </Button>

          }
  
        <Button size="small" onClick={handleShowComicDetails}>Detalhes</Button>
                
        <FavoriteButton type="icon" comicId={id} />

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
