import { Dashboard, ShoppingCart, Bookmarks,Receipt } from '@mui/icons-material';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const paperSx = {
  
}

export function BottomNavigationMobile() {

  const navigate = useNavigate();

  const [activeMenuIdx, setActiveMenuIdx] = useState<number>(0);

  const navigationPages = ['/comics', '/cart', '/favorites', '/history']

  useEffect(()=>{navigate(navigationPages[activeMenuIdx])}, [activeMenuIdx]);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={activeMenuIdx}
      onChange={(event, newValue:number) => {setActiveMenuIdx(newValue)}}
      >

      <BottomNavigationAction label="Quadrinhos" icon={<Dashboard/>}/>
      <BottomNavigationAction label="Carrinho" icon={<ShoppingCart/>}/>
      <BottomNavigationAction label="Favoritos" icon={<Bookmarks/>}/>
      <BottomNavigationAction label="Histórico" icon={<Receipt/>}/>

    </BottomNavigation>
    </Paper>
  )
}