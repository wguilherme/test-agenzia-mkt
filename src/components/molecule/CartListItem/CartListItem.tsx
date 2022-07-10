import { ListItem, IconButton, ListItemText, Paper } from "@mui/material";
import { Delete } from '@mui/icons-material'
import { removeComicFromCart } from '@/features';
import { useDispatch } from "react-redux";

type Props = {
  comicItem: {
    id: string,
    title: string,
    price: number,
  } 
}

export function CartListItem({comicItem: { id, title, price }}: Props) {

  const dispatch = useDispatch();
  
  function handleRemoveComicFromCart() {dispatch(removeComicFromCart(id))}

  return(
    <Paper>
    <ListItem
      sx={{mb:1}}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleRemoveComicFromCart}>
          <Delete />
        </IconButton>
      }
    >
      <ListItemText primary={title} secondary={`R$ ${price}`}/>
    </ListItem>
    </Paper>
  )
}