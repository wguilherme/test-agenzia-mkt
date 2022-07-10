import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App';
import { UserProvider } from '@/contexts';
import { store } from './store';
import './styles/global.scss';
import { QueryClient, QueryClientProvider } from 'react-query'

const theme: any = createTheme({
  palette: {
    primary: red,
    secondary: {
      main: '#518CC9',
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>        
        <UserProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)