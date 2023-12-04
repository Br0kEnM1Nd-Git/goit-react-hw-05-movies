const { useState } = require('react');

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return { isLoading, setIsLoading, error, setError };
};

export default useRequest;
