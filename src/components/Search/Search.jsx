import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../../styles';
import { getMovies } from '../../redux/feature/movieSlice';

const Search = () => {
  const [name, setName] = useState('sonic');
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    movieList: { Error: error },
  } = useSelector((state) => state.movie);
  //   console.log(movieList);

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h2 className={classes.title}>Movie Search App</h2>
        <TextField
          type='text'
          value={name}
          fullWidth
          sx={{ m: 1, width: '55ch' }}
          onChange={handleChange}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </>
  );
};

export default Search;
