import { createStore, combineReducers, applyMiddleware } from 'redux'; //eslint-disable-line
import { productsReducer, addProductReducer } from './productos/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ 
  products: productsReducer, 
  addProductReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
