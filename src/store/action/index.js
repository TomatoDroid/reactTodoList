import { v4 as uuidv4 } from "uuid";
import { ACTION_TYPES } from "../../constants/actionTypes";

export const onLoad = (todos) => {
  return {
    type: ACTION_TYPES.LOAD,
    todos,
  };
};

export const addTodo = (text) => {
  return {
    type: ACTION_TYPES.ADD_TODO,
    id: uuidv4(),
    text: text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: ACTION_TYPES.TOGGLE_TODO,
    id,
  };
};

export const updateTodo = (todo) => {
  return {
    type: ACTION_TYPES.UPDATE_TODO,
    id: todo.id,
    text: todo.text,
  };
};

export const clearCompletedTodo = () => {
  return {
    type: ACTION_TYPES.CLEAR_COMPLETED,
  };
};

export const completedAll = () => {
  return {
    type: ACTION_TYPES.CHANGE_ALL_COMPLETED,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: ACTION_TYPES.CHANGE_FILTER,
    filter: filter,
  };
};
