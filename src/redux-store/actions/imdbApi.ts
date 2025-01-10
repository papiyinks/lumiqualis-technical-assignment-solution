import axios from 'axios';
import { INasaImdbApiData } from '../../utils/interfaces';

import * as actionTypes from './actionTypes';

export const fetchMovieById = (id: string | undefined) => {
    return async (
      dispatch: (arg0: { type: string; data: { data: INasaImdbApiData } }) => void
    ) => {
        const IMDB_API = `https://api.themoviedb.org/3/movie/${id}?api_key=48b43c71c226d58239efb833d05ab17c`;    
        const { data } = await axios.get(IMDB_API);
    
        dispatch({
          type: actionTypes.SHOW_A_SINGLE_MOVIE,
          data,
      });
    };
};
