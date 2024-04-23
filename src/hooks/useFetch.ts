import { useState, useEffect } from 'react';


const useFetch = (url: string, type: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Clean-up function to cancel fetch on component unmount (optional)
        return () => {
            // Abort the fetch request if it's still ongoing
            // This requires using the AbortController API
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;