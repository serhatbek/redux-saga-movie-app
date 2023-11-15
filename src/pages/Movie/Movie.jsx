import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovie } from '../../redux/feature/movieSlice';

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movie);

  console.log('movie 🩷🩷🩷', movie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  return <div>Movie</div>;
};

export default Movie;
