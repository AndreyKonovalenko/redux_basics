export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


// action creator
export const increment = (number) => {
    return {
        type: INCREMENT,
        value: number
    }
};

export const decrement = (number) => {
    return {
        type: DECREMENT,
        value: number
    }
};

export const add = (number) => {
    return {
        type: ADD,
        value: number
    }
};

export const subtract = (number) => {
    return {
        type: SUBTRACT,
        value: number
    }
};

export const store_result = (result) => {
    return {
        type: STORE_RESULT,
        current_result: result
    }
};

export const delete_result = (id) => {
    return {
        type: DELETE_RESULT,
        resultElementID: id
    }
};