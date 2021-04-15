import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import data from './data';
// import { productListReducer } from './reducers/productsReducers';
// import { cartReducer } from './reducers/cartReducers';
import itemsReducer from './reducers/itemsReducer'

function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
}


const reducer = combineReducers({
    // productList: productListReducer,
    // productDetails: productDetailsReducer,
    // cart: cartReducer,
    item: itemsReducer
});

const persistedState = loadFromLocalStorage()

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    persistedState,
    // initialState, 
    composeEnhanser(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;