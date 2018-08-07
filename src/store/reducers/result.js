import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';


const initialState = {
    results: []
};

const deleteResult = (state, action) =>{
    const updatedArray = state.results.filter((element, index) => element.id !== action.resultElementID);
    return updateObject(state, {results: updatedArray});
} 

const result = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.current_result}) });
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
        default: return state;
    }
}

export default result;