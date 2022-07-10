import { ListItem, ListItemText, Paper } from "@mui/material";
import { FavoriteButton } from "../FavoriteButton";

type Props = {
  comicItem: {
    id: string,
    title: string,
    price: number,
  } 
}

export function FavoriteListItem({comicItem: { id, title, price }}: Props) {
  return(
    <Paper>
    <ListItem
      sx={{mb:1}}
      secondaryAction={<FavoriteButton type="icon" comicId={id}/>}
    >
      <ListItemText primary={title} secondary={`R$ ${price}`}/>
    </ListItem>
    </Paper>
  )
}