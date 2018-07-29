const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    counter: 0
};

// Reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1 
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value 
        };
    }
    return state;
};
//"state = initialState" syntax for asigning default value,
// if in any case variable is undefined it will take the default value

// Store

const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() =>{
    console.log('[Subscription', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
//Convention is to use all uppercase in defining type of action
// INC means to increase is think
console.log(store.getState());


