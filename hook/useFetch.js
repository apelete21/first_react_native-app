import axios from "axios";
import React, { useEffect, useState } from "react";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

function UseFetch(endpoint, query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "d4250d776dmsh3bc7f57b1d482cfp15addbjsn06ee44d59379",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fecthData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  useEffect(() => {
    fecthData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fecthData();
  };

  return { data, isLoading, error, refetch };
}

export default UseFetch;
