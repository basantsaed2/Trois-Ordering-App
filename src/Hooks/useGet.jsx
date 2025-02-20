import axios from "axios";
import { useEffect, useState, useCallback } from "react";
// import { useAuth } from "../Context/Auth";
import { useSelector } from "react-redux";

export const useGet = ({ url, required }) => {
    // const auth = useAuth();
    const token = useSelector(state => state?.user?.data?.token || '');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        if (required === true && !token) {
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': `Bearer ${token || ''}`,
                    'Authorization': token ? `Bearer ${token}` : '',
                },
            });
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            console.error('errorGet', error);
        } finally {
            setLoading(false);
        }
    }, [url, token]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { refetch: fetchData, loading, data, required };
};
