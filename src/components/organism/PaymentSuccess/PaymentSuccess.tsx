import { Box, Alert, Paper, Button, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function PaymentSuccess(){

  const navigate = useNavigate()

    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

        <Alert sx={{width: '100%'}} severity="success">Pagamento realizado com sucesso</Alert>

        <Paper sx={{ p: 3, mt:2 }}>

          <Typography>
              Você receberá um e-mail com os detalhes do seu pagamento.
          </Typography>

          <Button fullWidth sx={{mt:2}} variant="outlined" color="secondary" onClick={()=>navigate('/comics')}>Continuar comprando...</Button>

        </Paper>
      </Box>
  )
}