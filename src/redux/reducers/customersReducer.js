import {
  SET_CUSTOMERS,
  POST_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_DATA
} from "../types";

const initialState = {
  customers: [],
  customer: {},
  errors: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_CUSTOMERS:
      return {
        ...state,
        loading: false,
        customers: action.payload
      };
    case POST_CUSTOMER:
      return {
        ...state
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case EDIT_CUSTOMER:
      return {
        ...state
      };

    case DELETE_CUSTOMER:
      let delete_index = state.customers.findIndex(
        customer => customer.id === action.payload.id
      );
      state.customers.splice(delete_index, 1);
      return {
        ...state
      };

    default:
      return state;
  }
}
