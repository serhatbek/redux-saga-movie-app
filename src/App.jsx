import { useState } from 'react';
import PopularMovies from './containers/PopularMovies';
import MovieDetails from './containers/MovieDetails';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PopularMovies />,
      },
      {
        path: '/movie/:id',
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
