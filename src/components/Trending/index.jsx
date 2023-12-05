import { HomeTitle, TrendingList } from 'components/Trending/trending.styled';
import { StyledLink } from 'styles/components.styled';

const Trending = ({ movies }) => {
  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <TrendingList>
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
      </TrendingList>
    </>
  );
};

export default Trending;
