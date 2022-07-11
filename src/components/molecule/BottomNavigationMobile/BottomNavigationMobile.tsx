import { Dashboard, ShoppingCart, Bookmarks,Receipt, LocalOffer } from '@mui/icons-material';
import { Badge, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function BottomNavigationMobile() {

  const { cart } = useSelector((state: any) => state.cart)

  const navigate = useNavigate();

  const [activeMenuIdx, setActiveMenuIdx] = useState<number>(0);

  const navigationPages = ['/comics', '/cart', '/favorites', '/purchases', '/coupon']

  useEffect(()=>{

    const mainPage = navigationPages.some(page => page !== window.location.pathname)

    if(mainPage){
      navigate(navigationPages[activeMenuIdx])
    }

  }, [activeMenuIdx]);

  return (
    <Paper sx={{
      position: 'fixed', bottom: 0, left: 0, right: 0
    }} elevation={3}>

    <BottomNavigation
      showLabels
      value={activeMenuIdx}
      onChange={(event, newValue:number) => {
        if(newValue === 0){
          navigate('/comics')
        }
      }}
      >   

      <BottomNavigationAction label="Quadrinhos" icon={<Dashboard/>}/>

      <BottomNavigationAction label="Carrinho" 
        icon={
          <Badge badgeContent={cart?.length} color="error">
          <ShoppingCart />  
          </Badge>
          }
      />

      <BottomNavigationAction label="Favoritos" icon={<Bookmarks/>}/>
      <BottomNavigationAction label="Compras" icon={<Receipt/>}/>
      <BottomNavigationAction label="Cupons" icon={<LocalOffer/>}/>

    </BottomNavigation>
    
    </Paper>
  )
}