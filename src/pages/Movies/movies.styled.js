import styled from 'styled-components';

const MovieSearch = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px 0;
`;

const MoviesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const MoviesListItem = styled.li`
  max-width: calc((100% - 30px) / 3);
  box-shadow: 0 0 5px black;
  padding: 5px;
  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const MovieTitle = styled.h4`
  word-wrap: break-word;
`;

const MoviePoster = styled.img`
  height: auto;
  width: 250px;
`;

export { MovieSearch, MoviesList, MoviesListItem, MoviePoster, MovieTitle };
