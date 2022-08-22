import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
        try{
         const result = await axios.get(url);

         setData(result.data);
        } catch (error) {
            SetError(error.message);
         } finally{
                setIsLoading(false);
            }
        
    };
    getData();
    }, [url]);

    return {data,isLoading, error};

}

export default useAxios;