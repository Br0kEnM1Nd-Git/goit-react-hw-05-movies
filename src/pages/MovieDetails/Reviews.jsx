import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading, error, setError } = useRequest();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const { results: reviews } = await api.getMovieReviews(movieId);
        setReviews(reviews);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId, setError, setIsLoading]);

  return (
    <>
      <h4>Reviews</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        reviews.length > 0 && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>Comment: {content}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default Reviews;
