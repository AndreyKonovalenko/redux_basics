import * as actionTypes from './actionTypes';

// action creator
export const increment = (number) => {
    return {
        type: actionTypes.INCREMENT,
        value: number
    }
};

export const decrement = (number) => {
    return {
        type: actionTypes.DECREMENT,
        value: number
    }
};

export const add = (number) => {
    return {
        type: actionTypes.ADD,
        value: number
    }
};

export const subtract = (number) => {
    return {
        type: actionTypes.SUBTRACT,
        value: number
    }
};