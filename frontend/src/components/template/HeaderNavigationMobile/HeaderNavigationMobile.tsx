import { AppBar, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

interface PropsInterface {
  title: string;
}

export function HeaderNavigationMobile({ title }: PropsInterface) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>
          {title || 'Marvel App'}
        </Typography>
      </Toolbar >
    </AppBar >
  );
}