import {useState, useEffect} from 'react';

export const UseFetch = (url) => {
const [data, setData] = useState([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
    fetch(url)
        .then((res) => res.json())
        .then((data) =>setData(data))
        .catch((error) => setError(error))
        .finally(()=> setLoading(false));
}, [url]);


  return {data, error, loading};
};


