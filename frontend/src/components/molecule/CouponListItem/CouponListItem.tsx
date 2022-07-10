import { ListItem, IconButton, ListItemText, Paper } from "@mui/material";
import { FileCopy } from '@mui/icons-material'

type ComponentProps = {
  couponDetail: {
    code: string,
    type: string,
    discount: number,
  },
  handleCopyCode: () => void
}


export function CouponListItem({couponDetail: {code, type, discount}, handleCopyCode}: ComponentProps) {
return(
    <>
    <Paper>
    <ListItem
      sx={{mb:1}}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleCopyCode}>
          <FileCopy color="secondary" /> 
        </IconButton>
      }
    >
      <ListItemText  primary={`${discount}% de desconto!`} secondary={`Código: ${code} - ${type}`}/>
    </ListItem>
    </Paper>
</>
  )
}