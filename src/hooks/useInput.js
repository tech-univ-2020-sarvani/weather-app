import { useState, useEffect } from 'react';
import axios from 'axios';
import details from '../constants/weatherapp.json';

const useInput = (defaultValue, url) => {
  const [params, setParams] = useState(defaultValue);
  const [listLoadComplete, setlistLoadComplete] = useState(null);
  useEffect(() => {
    const someFunc = async () => {
      try {
        const response = await axios.get(url);
        setParams(response.data);
        setlistLoadComplete(true);
      } catch (e) {
        setlistLoadComplete(false);
      }
    };
    someFunc();
  }, [details.lat, details.lon]);
  return [params, setParams, listLoadComplete];
};
export default useInput;
