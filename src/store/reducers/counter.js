import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
};

const counter = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.INCREMENT:
            // classic way of immutable object copying
            const newState = Object.assign({}, state); 
            newState.counter = state.counter + action.value;
            return newState;
        case actionTypes.DECREMENT: 
            return {
                //ES 6 using spread opertor for object copying
                ...state, 
                counter: state.counter + action.value 
            };
        case actionTypes.ADD: 
            return {
                ...state, 
                counter: state.counter + action.value 
            };
        case actionTypes.SUBTRACT: 
            return {
                ...state, 
                counter: state.counter + action.value 
            };
        default:
            return state;
    }
}

export default counter;