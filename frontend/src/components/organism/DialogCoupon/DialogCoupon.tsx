import { Box, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";

export function DialogCoupon({ openCouponDialog, setOpenCouponDialog, formik }: any) {
  
  return(
  <form  onSubmit={formik.handleSubmit}>      
    <Dialog open={openCouponDialog} onClose={() => setOpenCouponDialog(false)}>      
    <DialogTitle>Cupon de desconto</DialogTitle>
    <DialogContent>

      <DialogContentText>
       Adicione o código do seu cupom e clique em aplicar para obter o desconto
      </DialogContentText>

      <TextField
        color="secondary"
        id="couponCode"
        name="couponCode"
        autoFocus
        margin="dense"
        label="Digite o código do cupom"
        value={formik.values.couponCode}
        onChange={formik.handleChange}
        type="numeric"
        fullWidth
      />

    </DialogContent>
      <Box sx={{p:2}}>
        <Button fullWidth variant="contained" color="secondary" type="submit">Aplicar desconto</Button>
        <Button sx={{mt:1}} fullWidth variant="text" onClick={() => { setOpenCouponDialog(false); formik.setFieldValue('couponCode', '') }}>Cancelar</Button>
      </Box>
  </Dialog>
    </form>
  
  )
}