import { Paper, Box, Typography } from "@mui/material";

type Props = {
  discountActive: any;
  totalPrice: string | number;
  totalPriceWithDiscount: string | number;
}

export function CartTotalPrice({discountActive, totalPrice, totalPriceWithDiscount}: Props){
  return (
    <Paper>
    <Box sx={{ p:2}}>
      <>
        <Typography sx={{ textDecoration: discountActive ? 'line-through' : 'none' }} variant="body1">Total:</Typography>
        <Typography sx={{ textDecoration: discountActive ? 'line-through' : 'none' }} variant="h6"> R$ {totalPrice}</Typography>
        </>
      {discountActive && (
        <>
        <Typography sx={{mt:2}} variant="body1">Cupom aplicado</Typography>
        <Typography variant="h6">Total com desconto:</Typography>
        <Typography variant="h6"> R$ {totalPriceWithDiscount}</Typography>
        </>
      )}
      
    </Box>   
  </Paper>
  )
}