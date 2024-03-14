import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  
  const fetchData = useCallback(async () => {
    
    try {
      const res = await fetch(url);
      const result = await res.json();
      
      if (!res.ok) {
        throw new Error('error')
      }

      setData(result)
    } catch (error) {
      console.log(error.message);
    }
  }, [])
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return { ...data };
};
