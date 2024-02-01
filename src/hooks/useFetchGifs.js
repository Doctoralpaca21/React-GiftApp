import { useEffect, useState } from "react"
import {getGifsAPI} from '../helpers/getGifs'
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifsAPI(category)
            .then( images => {
                setState({
                    data: images,
                    loading: false
                });
            });
    },[category]);
    
    return state;
}