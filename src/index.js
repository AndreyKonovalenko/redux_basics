import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// redux-thunk is a function for asynchronous action execution
// by the way it is a middleware


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    return next => {
        return aciton => {
            console.log('[Middleware] Dispatching', aciton);
            const result = next(aciton);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
// second argument in createStore is called "enhancer" where we can implement middleware or
//list of middleware

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('root'));
registerServiceWorker();
