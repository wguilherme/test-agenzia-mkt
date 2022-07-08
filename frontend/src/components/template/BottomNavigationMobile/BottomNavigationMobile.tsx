import { Dashboard, ShoppingCart, Bookmarks,Receipt } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import { LoggedUserContext } from '@contexts';
// import auth from '../../../services/auth';

export function BottomNavigationMobile(props: any) {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [activeMenuIdx, setActiveMenuIdx] = React.useState<number>(0);  

  // useEffect(()=>{

  // })



  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      // sx={{ bgcolor: "primary.main"}}
      value={activeMenuIdx}
      onChange={(event, newValue:number) => {setActiveMenuIdx(newValue)}}
      >

      <BottomNavigationAction label="Quadrinhos" icon={<Dashboard/>}/>
      <BottomNavigationAction label="Carrinho" icon={<Receipt/>}/>
      <BottomNavigationAction label="Favoritos" icon={<Bookmarks/>}/>
      <BottomNavigationAction label="Histórico" icon={<Receipt/>}/>

    </BottomNavigation>
    </Paper>
  )
}