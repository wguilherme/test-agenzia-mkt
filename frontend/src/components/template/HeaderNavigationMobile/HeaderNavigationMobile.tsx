import { AppBar, Typography, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export function HeaderNavigationMobile({ title }: any) {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ bgcolor: "primary.main" }}>
        <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          {title || 'Marvel App'}
        </Typography>
      </Toolbar >
    </AppBar >
  );
}