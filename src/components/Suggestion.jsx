import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/searchSlice';

const Suggestion = () => {
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    if (!e.target.value) {
      return;
    }
    dispatch(searchMovies(e.target.value));
  };

  return (
    <>
      <TextField
        id='search'
        placeholder='Search'
        fullWidth={true}
        sx={{ mb: 5 }}
        variant='standard'
        inputProps={{
          onChange: onInputChange,
        }}
      />
    </>
  );
};

export default Suggestion;
