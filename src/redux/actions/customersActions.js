import {
  SET_CUSTOMERS,
  POST_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_DATA
} from "../types";

import axios from "axios";

// Get all customers
export const getCustomers = () => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .get("/customers")
    .then(res => {
      dispatch({ type: SET_CUSTOMERS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_CUSTOMERS, payload: [] });
    });
};
// add a customer
export const addCustomer = (newCustomer, history) => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .post("/customers", newCustomer)
    .then(res => {
      dispatch({ type: POST_CUSTOMER, payload: res.data });
      dispatch(clearErrors());
      history.push("/");
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

// edit a customer
export const editCustomer = (id, customerData, history) => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .put(`/customers/${id}`, customerData)
    .then(res => {
      dispatch({ type: EDIT_CUSTOMER, payload: res.data.data });
      dispatch(clearErrors());
      history.push("/");
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

// edit a customer
export const removeCustomer = id => dispatch => {
  axios
    .delete(`/customers/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: DELETE_CUSTOMER, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

// clear errors
export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
