import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import { ArrowBackIos } from '@mui/icons-material';

type Props = {
  show?: boolean
}

export const BackButton = ({show}: Props) => {
  const navigate = useNavigate();
  return (
    <IconButton  edge="start" onClick={() => navigate(-1)} sx={{ pl: 2 }}>
      <ArrowBackIos sx={{
        color: 'primary.contrastText',
        visibility: show ? 'visibile' : 'hidden'
        }} />
    </IconButton>
  )
}
