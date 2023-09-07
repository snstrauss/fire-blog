import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function makeApiCall(endpoint) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("data not found");
        }

        return response.json();
      })
      .then(addMockDelay)
      .then(resolve)
      .catch(reject);
  });
}

export default function useApi(endpoint) {
  const [data, setData] = useState();
  const [requestPending, setRequestPending] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setData();
    setRequestPending(false);
    setError();
  }, []);

  useEffect(() => {
    setRequestPending(true);

    makeApiCall(endpoint)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setRequestPending(false);
      });
  }, [endpoint]);

  return {
    data,
    requestPending,
    error,
  };
}

// this mock delay is added only to show off 'loading' animation
function addMockDelay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}
