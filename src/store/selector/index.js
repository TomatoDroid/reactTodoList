import { FILTERS } from "../../constants/filter";

export const getCompleted = (todos) => {
  return todos.filter((t) => t.completed);
};

export const getUnCompleted = (todos) => {
  return todos.filter((t) => !t.completed);
};

export const getVisibleTodo = (todos, filter) => {
  switch (filter) {
    case FILTERS.completed:
      return getCompleted(todos);
    case FILTERS.active:
      return getUnCompleted(todos);
    case FILTERS.all:
    default:
      return todos;
  }
};
