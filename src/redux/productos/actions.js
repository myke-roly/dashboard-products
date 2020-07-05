import * as actions from '../../const/actionTypes';

// GET PRODUCTS
export const startGetProducts = () => ({
  type: actions.GET_PRODUCTS_START,
});
export const successGetProducts = (product) => ({
  type: actions.GET_PRODUCTS_SUCCESS,
  payload: product
});
export const errorGetProducts = () => ({
  type: actions.GET_PRODUCTS_ERROR,
  payload: []
});


// ADD PRODUCTS 
export const startAddProduct = () => ({
  type: actions.ADD_PRODUCTS_START,
});
export const successAddProduct = (product) => ({
  type: actions.ADD_PRODUCTS_SUCCESS,
  payload: product
});
export const errorAddProduct = (err) => ({
  type: actions.ADD_PRODUCTS_ERROR,
  payload: err
});

// DELETE PRODUCT 
export const startDeleteProduct = () => ({
  type: actions.DELETE_PRODUCTS_START,
});
export const successDeleteProduct = (nameProduct) => ({
  type: actions.DELETE_PRODUCTS_SUCCESS,
  payload: nameProduct
});
export const errorDeleteProduct = () => ({
  type: actions.DELETE_PRODUCTS_ERROR,
  payload: []
});
