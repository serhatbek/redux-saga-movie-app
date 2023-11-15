import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovie } from '../../redux/feature/movieSlice';
import { Button, Typography } from '@mui/material';
import useStyles from '../../styles';

const Movie = () => {
  const { movie } = useSelector((state) => state.movie);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Genre: genre,
    Director: director,
    Plot: plot,
    Actors: actors,
    imdbRating: rating,
  } = movie;

  const goBack = () => {
    navigate('/');
  };

  return (
    <section className={classes.section}>
      <img src={poster} alt={title} />
      <div>
        <Typography align='left' variant='h3' gutterBottom component='h2'>
          {title}
        </Typography>
        <Typography align='left' variant='h5' gutterBottom component='h5'>
          Year: {year}
        </Typography>
        <Typography align='left' variant='body1' gutterBottom component='p'>
          Plot: {plot}
        </Typography>
        <Typography align='left' variant='h3' gutterBottom component='h2'>
          Director: {director}
        </Typography>
        <Button variant='contained' onClick={() => navigate('/')}>
          Go Back
        </Button>
      </div>
    </section>
  );
};

export default Movie;
