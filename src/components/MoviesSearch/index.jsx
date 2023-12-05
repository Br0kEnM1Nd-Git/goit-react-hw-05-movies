import { StyledLink } from 'styles/components.styled';
import {
  MoviePoster,
  MovieTitle,
  MoviesList,
  MoviesListItem,
} from './movies.styled';

const MoviesSearch = ({ movies, search }) => {
  return (
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
  );
};

export default MoviesSearch;
