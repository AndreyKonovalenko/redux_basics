const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    counter: 0
};

// Reducer


const rootReducer = (state = initialState, action) => {
    return state;
};
//"state = initialState" syntax for asigning default value,
// if in any case variable is undefined it will take the default value

// Store

const store = createStore(rootReducer);
console.log(store.getState());


//Dispatching Action

//Subscription