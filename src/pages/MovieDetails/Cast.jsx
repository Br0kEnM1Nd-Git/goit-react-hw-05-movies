import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading, error, setError } = useRequest();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const { cast } = await api.getMovieCast(movieId);
        setCast(cast);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId, setError, setIsLoading]);

  return (
    <>
      <h4>Cast</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        cast.length > 0 && (
          <ul>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  height={100}
                  width={100}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://i.imgur.com/jtwlswk.png'
                  }
                  alt=""
                />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default Cast;
