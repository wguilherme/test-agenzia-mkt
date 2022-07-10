import { Box, Alert } from "@mui/material";

export function DesktopFallBack(){

  return (    
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: 'background.paper',
      color: 'text.primary'
    }}>

      <Alert severity="error">
        Acesse essa página no seu navegador mobile
      </Alert>

    </Box>
  )
}