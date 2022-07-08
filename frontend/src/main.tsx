import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App';
import { UserProvider } from '@/contexts';
import { store } from './store';
import './styles/global.scss';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const theme: any = createTheme({
  palette: {
    // mode: 'dark',
    primary: indigo
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
    <ThemeProvider theme={theme}>
      
      <UserProvider>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
          </QueryClientProvider>
        </Provider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
)