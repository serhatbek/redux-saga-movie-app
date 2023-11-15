import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const { movieList } = useSelector((state) => state.movie);
  //   console.log(movieList);
  return (
    <>
      <Grid
        sx={{ flexGrow: 1, maxWidth: '1170px', margin: '0 auto' }}
        container
      >
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={3}>
            {movieList?.Search?.map((movie) => {
              const {
                Poster: poster,
                Title: title,
                Year: year,
                imdbID: id,
              } = movie;

              return (
                <Grid key={id} item>
                  <Card sx={{ width: '250px' }}>
                    <Link to={`/movie/${id}`}>
                      <CardMedia
                        component='img'
                        height='350'
                        image={poster}
                        alt={title}
                      />
                      <CardContent>
                        <Typography variant='body2' color='text.primary'>
                          {title}
                        </Typography>
                        <Typography variant='body2' color='text.primary'>
                          {year}
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieList;
