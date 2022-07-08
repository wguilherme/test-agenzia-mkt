import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { UserProvider } from '@/contexts';
import { store } from './store';
import './styles/global.scss';

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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)