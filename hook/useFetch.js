import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eda30c92f5mshbb5e93d0c15bd47p12086cjsne74215910f3c',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    },
  };
}