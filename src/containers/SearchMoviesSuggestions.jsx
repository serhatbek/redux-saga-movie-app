import { useSelector } from 'react-redux';
import Suggestion from '../components/Suggestion';

const SearchMoviesSuggestions = () => {
  const { isFetching } = useSelector((state) => state.search);
  console.log(isFetching);

  return (
    <div>
      <Suggestion />
    </div>
  );
};

export default SearchMoviesSuggestions;
