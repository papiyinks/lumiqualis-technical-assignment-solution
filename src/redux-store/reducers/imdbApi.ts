import * as actionTypes from '../actions/actionTypes';
import { INasaImdbApiData } from '../../utils/interfaces';

interface actionType {
    type: string, 
    data: {
        poster_path:  string;
        original_title: string;
        imdb_id: string;
        status: string;
        overview: string;
        budget: number;
        revenue: number;
        vote_average: number
        release_date: Date;
        genres: Array<{name: string}>
    }
}

const initialState: INasaImdbApiData = {
    data: {
        poster_path:  "",
        original_title: "",
        imdb_id: "",
        status: "",
        overview: "",
        budget: 0,
        revenue: 0,
        vote_average: 0,
        release_date: new Date(),
        genres: []
    }
};

const reducer = (state=initialState, action: actionType) => {
    switch (action.type) {
        case actionTypes.SHOW_A_SINGLE_MOVIE:
            return {
                ...state,
                data: action.data
            };                  
        default:
            return state;        
    }
}

export default reducer;