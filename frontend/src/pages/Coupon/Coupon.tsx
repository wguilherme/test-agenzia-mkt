import axios from 'axios'
import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { CouponListItem } from '@/components'

interface Coupon {
  id: number
  code: string
  discount: number
  type: string
}

export function CouponPage(){

  const [openCouponToast, setOpenCouponToast] = useState(false)
  const [coupons, setCoupons] = useState<Coupon[]>([])

  useEffect(()=>{
    async function fetchData(){
      const { data }:any = await axios.get('http://localhost:4000/coupons')
      setCoupons(data)      
    }
    fetchData()
  },[])

  function handleCloseCouponToast(){ setOpenCouponToast(false) }
  
  function handleCopyCode(code:string){ 
    navigator?.clipboard.writeText(code)
    setOpenCouponToast(true) 
  }

  if(!coupons) return <Alert severity="info">Carregando...</Alert>

  return(
    <>
    {
      coupons?.map((coupon)=>(<CouponListItem key={coupon.code} handleCopyCode={()=>handleCopyCode(coupon.code)} couponDetail={coupon}/>))
    }

      <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={openCouponToast}
      autoHideDuration={5000}
      onClose={handleCloseCouponToast}
      message={'Código copiado para área de transferência!'}
    />

    </>
  )
}