import { StyledLink } from 'styles/components.styled';
import {
  AdditionalList,
  GenresList,
  InfoSection,
  MovieDescription,
} from './movie-details.styled';

const MovieDetailsComponent = ({ movie, from }) => {
  const { poster_path, overview, title, release_date, genres, vote_average } =
    movie ?? {};
  const date = release_date?.split('-')[0];
  const rating = (vote_average * 10)?.toFixed(0);

  return (
    <>
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
    </>
  );
};

export default MovieDetailsComponent;
