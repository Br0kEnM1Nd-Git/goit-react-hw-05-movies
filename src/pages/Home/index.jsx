import api from 'api/api';
import { useEffect, useState } from 'react';
import { StyledLink } from 'styles/components.styled';

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
    <>
      <h2>Trending today</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {movies.length > 0 &&
            movies.map(movie => {
              return (
                <li key={movie.id}>
                  <StyledLink to={`/movies/${movie.id}`} state={{ from: '/' }}>
                    {movie.title}
                  </StyledLink>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default Home;
