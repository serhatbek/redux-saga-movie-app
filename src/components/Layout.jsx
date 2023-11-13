import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme, styled } from '@mui/material';
import logoImg from '../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';
import SearchMoviesSuggestions from '../containers/SearchMoviesSuggestions';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Img = styled('img')({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  width: 500,
  maxWidth: '100%',
});

const LayoutWrapper = styled('div')(({ theme }) => ({
  margin: 24,
  width: 'auto',
  [theme.breakpoints.up('lg')]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    window: theme.breakpoints.values.lg,
  },
}));

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LayoutWrapper>
        <Link to='/'>
          <Img src={logoImg} alt='The movie db' />
        </Link>
        <SearchMoviesSuggestions />
      </LayoutWrapper>
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
