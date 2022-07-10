import { AppBar,  Grid,  Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { BackButton } from '@/components';
import { useLocation } from 'react-router-dom'

interface PropsInterface {
  title: string;
}


export function HeaderNavigationMobile({ title }: PropsInterface) {

  const location = useLocation()

  const pathsThatNeedBackButton = ['/comics/']  
  const shouldShowBackButton:boolean = pathsThatNeedBackButton.some((path:string)=> location.pathname.includes(path))


  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
      <Grid container alignItems="center">
        <Grid item xs={2}>
        <BackButton show={shouldShowBackButton}/> 
        </Grid>
        <Grid item xs>
        <Typography variant="button" component="div" sx={{ flexGrow: 1 }} align="center">
        {title || 'Coach Anywhere'}
        </Typography>
        </Grid>
        <Grid item xs={2} />
        </Grid>
      </Toolbar >
    </AppBar >
        //    <AppBar position="sticky" id="header-component"  >
        //    <Toolbar variant="dense">
        //      <Grid container alignItems="center">
        //        <Grid item xs={2}>
        //          <BackButton />
        //        </Grid>
        //        <Grid item xs>
        //          <Typography variant="button" component="div" sx={{ flexGrow: 1 }} align="center">
        //            {title || 'Coach Anywhere'}
        //          </Typography>
        //        </Grid>
        //        <Grid item xs={2} />
        //      </Grid>
        //    </Toolbar>
        //  </AppBar>
  );
}