import { ACTION_TYPES } from "../../constants/actionTypes";

const filter = (state = "all", action) => {
  debugger
  switch (action.type) {
    case ACTION_TYPES.CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
