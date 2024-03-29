import { Alert, Button, List,  Snackbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CartListItem, PaymentSuccess, DialogCoupon, CartTotalPrice } from "@/components";
import {  useComics } from "@/services";
import { UserContext } from '@/contexts'
import { clearCart } from "@/features";

const couponsDiscounts:any = { 'AG3NZ1A': 0.93, 'ANY22': 0.1, 'ANY55': 0.25}

export function CartPage(){
  
  const [userPaid, setUserPaid] = useState(false)
  const [openCouponDialog, setOpenCouponDialog] = useState(false)
  const [discountActive, setDiscountActive] = useState()
  const [couponToast, setCouponToast] = useState(false)

  const { userPurchases, setUserPurchases } = useContext(UserContext)
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.cart)  
  const {data: comics, isLoading, error} = useComics()

  const comicsInCart = comics?.filter((comic: any) => cart.includes(comic.id))
  const totalPrice: any = comicsInCart?.reduce((acc: number, curr: any) => acc + curr?.price, 0).toFixed(2)
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
    if(couponCode !== 'AG3NZ1A' && comicsInCart?.some((comicItem:any)=> comicItem?.type === 'Especial')){
      setCouponToast(true)
    } else {
      setDiscountActive(couponsDiscounts[couponCode])
      setOpenCouponDialog(false)
    }
  }

  function handleClearCart(){ dispatch( clearCart() )}

  function handlePayment(){
    const newPaymentOrder = {
      comics: comicsInCart,
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
        {comicsInCart?.map((comic: any) => (<CartListItem key={comic.id} comicItem={comic} />))}
      </List>

  <CartTotalPrice discountActive={discountActive} totalPrice={totalPrice} totalPriceWithDiscount={totalPriceWithDiscount}/>

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

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={couponToast}
        autoHideDuration={3000}
        onClose={() => setCouponToast(false)}
        message={'Remova o quadrinho especial para aplicar o cupom comum.'}
      />    
    </>
  )
}