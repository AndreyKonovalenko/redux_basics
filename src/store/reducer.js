const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'INCREMENT':
            // classic way of immutable object copying
            const newState = Object.assign({}, state); 
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT': 
            return {
                //ES 6 using spread opertor for object copying
                ...state, 
                counter: state.counter + action.value 
            };
        case 'ADD': 
            return {
                ...state, 
                counter: state.counter + action.value 
            };
        case 'SUBTRACT': 
            return {
                ...state, 
                counter: state.counter + action.value 
            };
        case 'STORE_RESULT': 
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter}) 

            };
        case 'DELETE_RESULT':
            //const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            // console.log("Im clicked!!", newArray);
            
            //const updatedArray = state.results.filter(element => true);
            //array.prototype.filter method retuns a new array dose not tuch the old one
            // if callback function inside filter returns true for all elements 
            // then filtered array will be full copy of the old one
            
            const updatedArray = state.results.filter((element, index) => element.id !== action.resultElementID);
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;