import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    counter: 0
};

const counter = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.INCREMENT:
            //example of using utility function updeteObject for make more leaner code
             return updateObject(state, {counter: state.counter + action.value})
        case actionTypes.DECREMENT: 
            return updateObject(state, {counter: state.counter + action.value})
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value})
        case actionTypes.SUBTRACT: 
            return updateObject(state, {counter: state.counter + action.value});
        default:
            return state;
    }
}

export default counter;