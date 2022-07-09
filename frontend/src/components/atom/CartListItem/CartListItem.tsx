import { ListItem, IconButton, ListItemText } from "@mui/material";
import { Delete } from '@mui/icons-material'
import { removeComicFromCart } from '@/features';
import { useDispatch } from "react-redux";

type CartListItemProps = {
  comicItem: {
    id: string,
    title: string,
    price: number,
  } 
}

export function CartListItem({comicItem: { id, title, price }}: CartListItemProps) {

  const dispatch = useDispatch();
  console.log('cartItemProps', id, title)
  function handleRemoveComicFromCart() {dispatch(removeComicFromCart(id))}

  return(
    <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={handleRemoveComicFromCart}>
            <Delete />
          </IconButton>
        }
      >
        <ListItemText primary={title} secondary={`R$ ${price || '100,00'}`}/>
    </ListItem>

  )
}