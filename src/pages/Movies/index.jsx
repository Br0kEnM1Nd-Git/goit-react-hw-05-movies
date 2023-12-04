import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, StyledLink } from 'styles/components.styled';
import {
  MoviePoster,
  MovieSearch,
  MovieTitle,
  MoviesList,
  MoviesListItem,
} from './movies.styled';

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
    <Container>
      <MovieSearch onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </MovieSearch>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movies.length > 0 && (
          <MoviesList>
            {movies.map(({ id, title, overview, poster_path }) => (
              <MoviesListItem key={id}>
                <StyledLink
                  to={`/movies/${id}`}
                  state={{ from: `/movies?${search}` }}
                >
                  <MovieTitle>{title}</MovieTitle>
                  <MoviePoster
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
              </MoviesListItem>
            ))}
          </MoviesList>
        )
      )}
    </Container>
  );
};

export default Movies;
