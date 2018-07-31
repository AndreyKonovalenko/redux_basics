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

            }
        default:
            return state;
    }
}

export default reducer;