import { MoviesSearchForm } from './movies.styled';

const SearchForm = ({ handleSubmit, query, handleChange }) => {
  return (
    <MoviesSearchForm onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </MoviesSearchForm>
  );
};

export default SearchForm;
