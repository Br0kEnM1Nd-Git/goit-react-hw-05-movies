import api from 'api/api';
import { useEffect, useState } from 'react';
import { Container } from 'styles/components.styled';
import Trending from 'components/Trending';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTrending = async () => {
      try {
        const resp = await api.getTrending();
        setMovies(resp);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrending();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Trending movies={movies} />
      )}
    </Container>
  );
};

export default Home;
