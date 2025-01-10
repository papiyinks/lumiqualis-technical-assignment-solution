import axios from 'axios';

import * as actionTypes from './actionTypes';
import { INasaApiData } from '../../utils/interfaces';

export const fetchNasaApiDataSuccess = (data: INasaApiData) => {
    return {
        type: actionTypes.FETCH_NASA_API_DATA_SUCCESS,
        data
    }
}

export const fetchNasaApiData = () => {
    return ((dispatch: (arg0: { type: string; data: INasaApiData; }) => void) => {
        const NASA_API = "https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR";
        
        const fetchData = async () => {
            try {
                const { data } = await axios.get(NASA_API);
                dispatch(fetchNasaApiDataSuccess(data))
            } catch (error) {
                console.log(error)
            }
        } 
            
        fetchData();
    })
}