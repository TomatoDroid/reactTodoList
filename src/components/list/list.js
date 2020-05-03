import React, { Component } from "react";
import "./index.scss";
import { ListItem } from "../listItem/listItem";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../../store/action";
import { getVisibleTodo } from "../../store/selector";

class List extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) => (
          <ListItem
            key={index}
            data={todo}
            onBlur={this.props.onBlur}
            onToggle={this.props.onTodoClick}
            onDelete={this.props.onDelete}
          ></ListItem>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodo(state.todos, state.visibilityFilter),
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onTodoClick: ({ id }) => {
      dispatch(toggleTodo(id));
    },
    onDelete: ({ id }) => {
      dispatch(deleteTodo(id));
    },
    onBlur: (todo) => {
      dispatch(updateTodo(todo));
    },
  };
};

List = connect(mapStateToProps, mapStateToDispatch)(List);

export default List;
