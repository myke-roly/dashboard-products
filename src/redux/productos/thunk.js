import {
  startGetProducts,
  successGetProducts,
  errorGetProducts,
  startAddProduct,
  successAddProduct,
  errorAddProduct,
  startDeleteProduct,
  successDeleteProduct,
  errorDeleteProduct,
} from './actions';
import { clientAxios } from '../../api';

// GET PRODUCTS
export function getProducts() {
  return async function (dispatch) {
    dispatch(startGetProducts());

    try {
      const response = await clientAxios('/api/productos', 'GET', null);
      dispatch(successGetProducts(response.data));
    } catch (error) {
      console.log(error);
      dispatch(errorGetProducts(error.message));
    }
  };
}

// ADD PRODUCTS
export function addProduct(product) {
  return async function (dispatch) {
    dispatch(startAddProduct());

    try {
      const response = await clientAxios('/api/productos', 'POST', product);
      console.log(response);
      setTimeout(() => dispatch(successAddProduct(response.data)), 1500);
    } catch (error) {
      console.log(error);
      dispatch(errorAddProduct(error.message));
    }
  };
}

// DELETE PRODUCT
export function deleteProduct(productID) {
  return async function (dispatch) {
    dispatch(startDeleteProduct());

    try {
      const response = await clientAxios(`/api/productos/${productID}`, 'DELETE', null);
      console.log(response);
      setTimeout(() => dispatch(successDeleteProduct(response.data)), 1500);
    } catch (error) {
      console.log(error);
      dispatch(errorDeleteProduct(error.message));
    }
  };
}
