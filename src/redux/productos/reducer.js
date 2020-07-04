import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_ERROR,
} from '../../const/actionTypes';

const initialSatte = {
  products: [],
  isLoading: true,
  error: null
}
export const productsReducer = (state = initialSatte, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        products: null
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case ADD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
