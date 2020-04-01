import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import customersReducer from "./reducers/customersReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  customer: customersReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
