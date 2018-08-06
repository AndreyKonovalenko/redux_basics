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


// for asychronouse purpouse we create saveResult a sycnhronouse copy of storeResult action creator
// and pass it into storeResult action creator upgraded by redux-thunk

export const saveResult = (result) => {
      return {
        type: STORE_RESULT,
        current_result: result
    }
}

export const storeResult = (result) => {
    // this is asynchronous part provided by redux-thunk
    // execution after 2 seconds timeout 
    return  dispatch => {
        setTimeout(() => { 
            dispatch(saveResult(result))
        }, 2000);
    };
 };
 

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElementID: id
    }
};