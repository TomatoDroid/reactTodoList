import React, { Component } from "react";
import "./index.scss";
import AddInput from "../addInput/addInput";
import List from "../list/list";
import FilterFooter from "../filterFooter/filterFooter";
import { connect } from "react-redux";
import { TodoLocal } from "../../services/todo-local";
import { onLoad } from "../../store/action";

class Main extends Component {
  componentDidMount() {
    this.props.onLoad(TodoLocal.loadTodos());
  }
  componentDidUpdate() {
    TodoLocal.storeTodos(this.props.todos);
  }
  render() {
    return (
      <main className="todo-main">
        <AddInput></AddInput>
        <List></List>
        {!!this.props.todos.length && <FilterFooter></FilterFooter>}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onLoad: (todos) => {
      dispatch(onLoad(todos));
    },
  };
};

Main = connect(mapStateToProps, mapStateToDispatch)(Main);

export default Main;
