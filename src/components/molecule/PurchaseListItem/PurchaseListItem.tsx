import { ListItem, ListItemText, Paper, Box, Typography } from "@mui/material";
import { formatDate } from '@/utils'

type Props = {
  purchaseDetails: {
    comics: any[],
    totalPrice: string,
    createdAt: Date | string
  }
}

export function PurchaseListItem({ purchaseDetails: { comics, createdAt, totalPrice }}: Props) {
  return (
    <>
    <Paper>
    <ListItem sx={{mb:1}}>
      <ListItemText primary={formatDate(createdAt)} secondary={`${comics?.length} produtos`}/>

      <Typography>
        Total<br/>
        R$ {totalPrice}
        </Typography>

    </ListItem>
    </Paper>
    </>
  )
}