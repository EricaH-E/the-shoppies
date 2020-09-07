import { ADD_NOMINATION, DELETE_NOMINATION } from '../actions/index';

const initialState = [];


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOMINATION:
            return [...state, action.payload];
        case DELETE_NOMINATION:
            return state.filter(nom => nom.imdbID !== action.payload.imdbID);
        default:
            return state;
    }
}