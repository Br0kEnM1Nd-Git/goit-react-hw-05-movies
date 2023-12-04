import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledLink } from 'styles/components.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const { isLoading, setIsLoading, error, setError } = useRequest();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    const searchParams = search.toString();
    if (searchParams) {
      setIsLoading(true);
      setError(null);
      const searchMovies = async () => {
        try {
          const { results: movies } = await api.searchMovies(searchParams);
          console.log(movies);
          setMovies(movies);
        } catch ({ message }) {
          setError(message);
        } finally {
          setIsLoading(false);
        }
      };
      searchMovies();
    }
  }, [search, setError, setIsLoading]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query) setSearch(`query=${query}`);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movies.length > 0 && (
          <ul>
            {movies.map(({ id, title, overview, poster_path }) => (
              <li key={id}>
                <StyledLink
                  to={`/movies/${id}`}
                  state={{ from: `/movies${search}` }}
                >
                  {' '}
                  {title}
                  <img
                    height={100}
                    weight={100}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : 'https://i.imgur.com/jtwlswk.png'
                    }
                    alt={overview}
                  />
                </StyledLink>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Movies;
