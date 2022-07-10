import { CartListItem, PaymentSuccess } from "@/components";
import {  useComics } from "@/services";
import { Alert, Box, Button, List, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '@/contexts'
import { useContext, useState, useEffect } from "react";
import { clearCart } from "@/features";
import { useFormik } from 'formik';
import { DialogCoupon } from "@/components";
import * as yup from 'yup';

const couponsDiscounts:any = { 'AG3NZ1A': 0.93, 'ANY22': 0.1, 'ANY55': 0.25}

export function CartPage(){
  
  const [userPaid, setUserPaid] = useState(false)
  const [openCouponDialog, setOpenCouponDialog] = useState(false)
  const [discountActive, setDiscountActive] = useState()
  
  const { userPurchases, setUserPurchases } = useContext(UserContext)

  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.cart)  
  const {data: comics, isLoading, error} = useComics()

  const coimicsInCart = comics?.filter((comic: any) => cart.includes(comic.id))
  const totalPrice: any = coimicsInCart?.reduce((acc: number, curr: any) => acc + curr?.price, 0).toFixed(2)
  const totalPriceWithDiscount = discountActive  ? (totalPrice - (totalPrice * discountActive)).toFixed(2) : totalPrice

  const validationSchema: any = yup.object().shape({
    couponCode: yup.string().required('Informe o código do cupom').oneOf(['AG3NZ1A', 'ANY22', 'ANY55'], 'Código inválido'),
  });

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      couponCode: '',
    },
    validationSchema,
    onSubmit: (formData: any) => {
      handleApplyCouponCode(formData)
    }
  })

  function handleOpenCouponDialog(){ setOpenCouponDialog(true) }

  const handleApplyCouponCode = ({couponCode}: any) => {
    setDiscountActive(couponsDiscounts[couponCode])
    setOpenCouponDialog(false)
  }

  function handleClearCart(){ dispatch( clearCart() )}

  function handlePayment(){
    const newPaymentOrder = {
      comics: coimicsInCart,
      totalPrice: discountActive ? totalPriceWithDiscount : totalPrice,
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

    <Button 
      sx={{mt:5}}
      onClick={handlePayment}
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