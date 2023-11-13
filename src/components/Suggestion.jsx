import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Suggestion = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.search);
  return (
    <>
      <TextField
        id='search'
        placeholder='Search'
        fullWidth={true}
        sx={{ mb: 5 }}
        variant='standard'
      />
    </>
  );
};

export default Suggestion;
