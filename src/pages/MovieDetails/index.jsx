import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink, Container } from 'styles/components.styled';
import MovieDetailsComponent from 'components/MovieDetailsComponent';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading, error, setError } = useRequest();
  const [movie, setMovie] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await api.getMovieDetails(movieId);
        setMovie(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [movieId, setError, setIsLoading]);

  const { from } = state ?? {};

  return (
    <Container>
      <BackLink to={from || '/'}>{'<- Back'}</BackLink>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movie && <MovieDetailsComponent movie={movie} from={from} />
      )}

      <Outlet />
    </Container>
  );
};

export default MovieDetails;
