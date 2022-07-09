import { ListItem, IconButton, ListItemText, Paper, Snackbar } from "@mui/material";
import { FileCopy } from '@mui/icons-material'
import { removeComicFromCart } from '@/features';
import { useDispatch } from "react-redux";

interface PropsInterface {
  couponDetail: {
    code: string,
    type: string,
    discount: number
  } 
}

export function CouponListItem({couponDetail: {code, type, discount}}: PropsInterface) {
  // const dispatch = useDispatch();

  function handleCopyCode(){ navigator.clipboard.writeText(code) }

  return(
    <>
    <Paper>
    <ListItem
      sx={{mb:1}}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleCopyCode}>
          <FileCopy />
        </IconButton>
      }
    >
      {/* <ListItemText primary={title} secondary={`R$ ${price}`}/> */}
    </ListItem>
    </Paper>


</>
  )
}