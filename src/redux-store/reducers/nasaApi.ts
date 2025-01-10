import * as actionTypes from '../actions/actionTypes';
import { INasaApiData } from '../../utils/interfaces';
interface actionType {
    type: string, 
    data: {
        title: string;
        url:  string;
        hdurl: string;
        date: Date
    }
}

const initialState : INasaApiData = {
    data: {
        title: "",
        url:  "",
        hdurl: "",
        date: new Date()
    }
};

const reducer = (state=initialState, action: actionType) => {
    switch (action.type) {
        case actionTypes.FETCH_NASA_API_DATA_SUCCESS:
            return {
                ...state,
                data: action.data
            };                  
        default:
            return state;        
    }
}

export default reducer;