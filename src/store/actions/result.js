import * as actionTypes from './actionTypes';

// action creater
// for asychronouse purpouse we create saveResult a sycnhronouse copy of storeResult action creator
// and pass it into storeResult action creator upgraded by redux-thunk

export const saveResult = (result) => {
    // const updatedResult = result * 2;
      return {
        type: actionTypes.STORE_RESULT,
        current_result: result
    }
}

export const storeResult = (result) => {
    // this is asynchronous part provided by redux-thunk
    // execution after 2 seconds timeout 
    return  (dispatch, getState) => {
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter);
            dispatch(saveResult(result))
        }, 2000);
    };
 };
 
export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementID: id
    }
};