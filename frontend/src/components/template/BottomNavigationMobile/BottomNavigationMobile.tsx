import { Dashboard, ShoppingCart, Bookmarks,Receipt } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import { LoggedUserContext } from '@contexts';
// import auth from '../../../services/auth';

export function BottomNavigationMobile(props: any) {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = React.useState(0);

  // const { setLoggedUser } = useContext(LoggedUserContext)
  


  const getColor = (path: string) => pathname.includes(path) ? 'primary.contrastText' : 'primary.200'

  return (
    <BottomNavigation
      sx={{ bgcolor: "primary.main", width: '100%', position: 'fixed', bottom: 0 }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}>
      <BottomNavigationAction
        onClick={() => navigate('/comics')}
        label={
          <Box>
            <Typography variant="body2" sx={{ mt: 0.25, color: getColor('comics') }}>
              Quadrinhos
            </Typography>
          </Box>
        }
        icon={<Dashboard sx={{color: getColor('comics')}}/>}
      />

      <BottomNavigationAction
        onClick={() => navigate('/favorites')}
        label={
          <Box>
            <Typography variant="body2" sx={{ mt: 0.25, color: getColor('favorites') }}>
              Favoritos
            </Typography>
          </Box>
        }
        icon={<Bookmarks sx={{color: getColor('favorites')}} />}
      />

      <BottomNavigationAction
        onClick={() => navigate('/cart')}
        label={
          <Box sx={{ color: 'primary.200' }}>
            <Typography variant="body2" sx={{ mt: 0.25,  color: getColor('cart') }}>
              Carrinho
            </Typography>
          </Box>}
        icon={<ShoppingCart sx={{ color: getColor('cart') }} />}
      />

      <BottomNavigationAction
        onClick={() => navigate('/history')}
        label={
          <Box sx={{ color: 'primary.200' }}>
            <Typography variant="body2" sx={{ mt: 0.25,  color: getColor('history') }}>
              Compras
            </Typography>
          </Box>}
        icon={<Receipt sx={{ color: getColor('history') }} />}
      />

    </BottomNavigation>
  )
}