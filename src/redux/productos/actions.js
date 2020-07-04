import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_ERROR,
  ADD_PRODUCTS_SUCCESS,
} from '../../const/actionTypes';

// GET PRODUCTS
export const startGetProducts = () => ({
  type: GET_PRODUCTS_START,
});
export const successGetProducts = (product) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: product
});
export const errorGetProducts = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error
});


// ADD PRODUCTS 
export const startAddProduct = () => ({
  type: ADD_PRODUCTS_START,
});
export const successAddProduct = (product) => ({
  type: ADD_PRODUCTS_SUCCESS,
  payload: product
});
export const errorAddProduct = (error) => ({
  type: ADD_PRODUCTS_ERROR,
  payload: error
});
