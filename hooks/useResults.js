import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {

    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Istanbul',
                },
            });
            setResults(response.data.businesses);
            setErrorMsg('');
        } catch { error } {
            setErrorMsg('');

        }
    };
    useEffect(() => {
        searchApi('Toast');
    }, []);

    return [searchApi, results, errorMsg];
}