import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import logoImg from '../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Link to='/'>
          <img src={logoImg} alt='The movie db' />
        </Link>
      </div>
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
