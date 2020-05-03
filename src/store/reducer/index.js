import { combineReducers } from "redux";
import visibilityFilter from "./filter";
import todos from "./todo";
import { createStore } from "redux";
const storeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(todoApp, storeEnhancer);

export default store;
