import { CartListItem, PaymentSuccess } from "@/components";
import { useComics } from "@/services";
import { Alert, Box, Button, List, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '@/contexts'
import { useContext, useState } from "react";
import { clearCart } from "@/features";
import { useFormik } from 'formik';
import { DialogCoupon } from "@/components";

export function CartPage(){
  
  const { userPurchases, setUserPurchases } = useContext(UserContext)
  const [userPaid, setUserPaid] = useState(false)
  const [openCouponDialog, setOpenCouponDialog] = useState(false)
  
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.cart)
  const {data: comics, isLoading, error} = useComics()

  const coimicsInCart = comics?.filter((comic: any) => cart.includes(comic.id))
  const totalPrice = coimicsInCart?.reduce((acc: number, curr: any) => acc + curr?.price, 0).toFixed(2)

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      couponCode: '',
    },
    onSubmit: (formData: any) => {
      handleApplyCouponCode(formData)
    }
  })

  console.log('formik', formik.values)

  function handleOpenCouponDialog(){ setOpenCouponDialog(true) }

  const handleApplyCouponCode = (formData: any) => {
    console.log('desconto aplicado!', formData)
  }

  function handleClearCart(){ dispatch( clearCart() )}

  function handleCheckout(){
    const newPaymentOrder = {
      comics: coimicsInCart,
      totalPrice,
      createdAt: new Date()
    }

    const newUserPurchases = [...userPurchases, newPaymentOrder]
    setUserPurchases(newUserPurchases)

    handleClearCart()

    setUserPaid(true)

  }

  if (isLoading) return <Typography>Carregando dados...</Typography>
  if (error) return <Typography>Falha ao obter dados deste quadrinho</Typography>
  if(cart?.length === 0) return (<Alert severity="info">Nenhum produto adicionado ao carrinho.</Alert>
  )

  if(userPaid) return <PaymentSuccess/>
  else return(
    <>
    <List>
      {
        coimicsInCart?.map((comic: any) => (<CartListItem key={comic.id} comicItem={comic} />))
      }
    </List>

    <Paper>
      <Box sx={{ p:3, display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">R$ {totalPrice}</Typography>
      </Box>
    </Paper>

    <Button 
      sx={{mt:5}}
      onClick={handleCheckout}
      variant="contained"
      color="secondary"
      size="large"
      fullWidth>
      Finalizar compra
    </Button>

    <Button 
      sx={{mt:2, color: '#ffffff90'}}
      onClick={handleOpenCouponDialog}
      variant="text"
      size="large"
      fullWidth>
        Aplicar cupom
    </Button>

    <DialogCoupon openCouponDialog={openCouponDialog} setOpenCouponDialog={setOpenCouponDialog} formik={formik} />
    
    </>
  )
}