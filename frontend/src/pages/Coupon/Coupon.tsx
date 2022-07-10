import { makeServer } from '@/services'
import { Snackbar, Button } from '@mui/material'
import { useState } from 'react'
import { CouponListItem } from '@/components'
// makeServer()

export function CouponPage(){
  const [openCouponToast, setOpenCouponToast] = useState(false)

  function handleCloseCouponToast(){ setOpenCouponToast(false) }
  function handleCopyCode(code:string){ 
    navigator?.clipboard.writeText(code)
    setOpenCouponToast(true) 
  }

  const coupons = [{
    code: '2233',
    type: 'raro',
    discount: 10
    },
    {
    code: '5530',
    type: 'comum',
    discount: 30
    },
    {
    code: '9988',
    type: 'comum',
    discount: 30
    }]

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