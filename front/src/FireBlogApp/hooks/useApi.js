import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export default function useApi(endpoint) {
  const [data, setData] = useState();
  const [requestPending, setRequestPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setRequestPending(true);

    fetch(`${BASE_URL}${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("data not found");
        }

        return response.json();
      })
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
