import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const result = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.current_result}) 

            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter((element, index) => element.id !== action.resultElementID);
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default result;