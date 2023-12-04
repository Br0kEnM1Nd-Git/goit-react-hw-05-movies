import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink, Container, StyledLink } from 'styles/components.styled';
import {
  AdditionalList,
  GenresList,
  InfoSection,
  MovieDescription,
} from './movie-details.styled';

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

  const { poster_path, overview, title, release_date, genres, vote_average } =
    movie ?? {};
  const date = release_date?.split('-')[0];
  const rating = (vote_average * 10)?.toFixed(0);

  const { from } = state ?? {};

  return (
    <Container>
      {from && <BackLink to={from}>{'<- Back'}</BackLink>}

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movie && (
          <InfoSection>
            <img
              height={500}
              weight={500}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://i.imgur.com/jtwlswk.png'
              }
              alt={overview}
            />
            <MovieDescription>
              <h2>{`${title} (${date})`}</h2>
              <p>User score: {rating}%</p>
              <h3>Overwiew</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <GenresList>
                {genres.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))}
              </GenresList>
            </MovieDescription>
          </InfoSection>
        )
      )}

      <span>Additional information:</span>
      <AdditionalList>
        <li>
          <StyledLink to="cast" state={{ from }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from }}>
            Reviews
          </StyledLink>
        </li>
      </AdditionalList>

      <Outlet />
    </Container>
  );
};

export default MovieDetails;
