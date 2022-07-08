import { Box, Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";

interface PropsInterface {
  title: string;
  image: string;
  description: string;
  price: number;
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
  return(<>{list.map((item:any)=>(<ComicCardSkeleton/>))}</>)
}


export function ComicCard({title, image, description, price}: PropsInterface){
  return(
    <Card sx={{mb:3}}>
      <CardMedia 
        component="img"
        height="194"
        image="https://images-na.ssl-images-amazon.com/images/I/91a97u0fSFL.jpg"
        alt="Paella dish"
      />   

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {
            description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus dolore cumque quidem blanditiis amet maiores. Possimus similique perferendis"
          }
    
        </Typography>
      </CardContent>

      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button size="small">Favoritar</Button>
        <Button size="small">Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  )
} 