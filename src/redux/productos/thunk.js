import * as actions from './actions';
import { clientAxios } from '../../api';


// GET PRODUCTS
export function getProducts() {
  return  async function(dispatch) {
    dispatch(actions.startGetProducts())

    try {
      const response = await clientAxios('/api/productos', "GET", null);
      dispatch(actions.successGetProducts(response.data));
    } catch (error) {
      console.log(error)
      dispatch(actions.errorGetProducts(error.message));
    } 
  }
}

// ADD PRODUCTS
export function addProduct(product) {
  return  async function(dispatch) {
    dispatch(actions.startAddProduct())

    try {
      const response = await clientAxios('/api/productos', "POST", product);
      setTimeout(() => dispatch(actions.successAddProduct(response.data)), 1500);
    } catch (error) {
      console.log(error)
      dispatch(actions.errorAddProduct(error.message));
    } 
  }
}