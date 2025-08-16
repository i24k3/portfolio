"use strict";

import { useEffect, useState } from "react";

export const useJsonData = (filename) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(filename);
                if (!res.ok) throw new Error("HTTP error");
                const json = await res.json();
                setData(json)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [filename]);
    return {data, loading, error};
}
