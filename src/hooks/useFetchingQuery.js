import axios from '../axios';
import { useEffect, useState } from 'react';

const useFetchingQuery = (requestUrl, isRandomOnlyOne = false) => {
  const [queryResponse, setQueryResponse] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestUrl);
      const result = isRandomOnlyOne
        ? request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        : request.data.results;
      setQueryResponse(result);

      return request;
    }

    fetchData();
  }, [requestUrl, isRandomOnlyOne]);

  return [queryResponse];
};

export default useFetchingQuery;
