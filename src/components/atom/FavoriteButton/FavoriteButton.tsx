import { Button } from "@mui/material"
import { FavoriteBorder, Favorite } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite} from '@/features'

type Props =  {
  type?: 'button' | 'icon',
  comicId: number | string
}

export function FavoriteButton({ type = 'button', comicId }: Props ){
  
  const dispatch = useDispatch()

  function handleToggleFavorite(){dispatch(toggleFavorite(comicId))}
  const { favorites } = useSelector((state: any) => state.favorite)
  const isFavorite = favorites.includes(comicId)

  if(type === 'icon') return <>{isFavorite ? <Favorite onClick={handleToggleFavorite} color="primary"/> : <FavoriteBorder onClick={handleToggleFavorite} color="primary"/>}</>

  else return(
    
    <Button fullWidth sx={{display: 'flex', gap:1}} onClick={handleToggleFavorite}>
      
      {isFavorite ? <Favorite color="primary"/> : <FavoriteBorder color="primary"/>}
      
      {isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos' }
      
    </Button>
  )
}