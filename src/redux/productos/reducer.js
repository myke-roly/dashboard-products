import * as actions from '../../const/actionTypes';

const initialSatte = {
  products: [],
  isLoading: true,
  error: null
}

export const productsReducer = (state = initialSatte, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        products: null
      };
    case actions.GET_PRODUCTS_SUCCESS:
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
    case actions.ADD_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case actions.ADD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
