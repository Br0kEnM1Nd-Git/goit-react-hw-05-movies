import { MoviesSearchForm } from './movies.styled';

const SearchForm = ({ handleSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(e.target.search.value);
  };

  return (
    <MoviesSearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search movie"
        required
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </MoviesSearchForm>
  );
};

export default SearchForm;
