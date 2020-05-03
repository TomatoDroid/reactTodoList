import { ACTION_TYPES } from "../../constants/actionTypes";

const todo = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD:
      return [...action.todos];
    case ACTION_TYPES.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case ACTION_TYPES.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case ACTION_TYPES.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ACTION_TYPES.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case ACTION_TYPES.CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
    case ACTION_TYPES.CHANGE_ALL_COMPLETED:
      return state.map((todo) => ({ ...todo, completed: true }));
    default:
      return state;
  }
};

export default todo;
