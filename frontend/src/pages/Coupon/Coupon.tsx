import { makeServer } from '@/services'
import { Snackbar, Button } from '@mui/material'
import { useState } from 'react'
makeServer()

export function CouponPage(){
  const [openCouponToast, setOpenCouponToast] = useState(false)

  function handleCloseCouponToast(){ setOpenCouponToast(false) }
  function handleOpenCouponToast(){ setOpenCouponToast(true) }

  return(
    <>

    <Button onClick={handleOpenCouponToast}>Open toast</Button>



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