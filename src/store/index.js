import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers/index';


const saveHistory = (state) => {
    try {
        const serializedHistory = JSON.stringify(state);
        localStorage.setItem('state', serializedHistory)
    }
    catch (e) {
        console.log(e);
    }
}

const getHistory = () => {
    try {
        const serializedHistory = localStorage.getItem('state');
        if (serializedHistory === null) return undefined;
        return JSON.parse(serializedHistory);
    }
    catch (e) {
        console.log(e);
        return undefined;
    }
}

const savedHistory = getHistory();

const middleware = applyMiddleware(thunk);
const store = createStore(
    Reducer,
    savedHistory,
    middleware
);

store.subscribe(() => saveHistory(store.getState()))

export default store; 