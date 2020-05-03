import React, { Component } from "react";
import "./index.scss";
import { AddInput } from "../addInput/addInput";
import { List } from "../list/list";
import { FilterFooter } from "../filterFooter/filterFooter";
import { v4 as uuidv4 } from "uuid";
import { FILTERS } from "../../constants/filter";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", text: "nihao", completed: false }],
      filter: FILTERS.all,
    };
  }
  onCreate = (vlaue) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuidv4(), text: vlaue, completed: false },
      ],
    });
  };
  onBlur = (data) => {
    this.setState({
      todos: this.state.todos.map((todo) => ({ ...todo, ...data })),
    });
  };
  onToggle = (data) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === data.id ? { ...todo, ...data } : { ...todo }
      ),
    });
  };
  onDelete = (data) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== data.id),
    });
  };
  unCompletedTodoLength = () => {
    return this.state.todos.filter((item) => !item.completed).length;
  };
  completedTodoLength = () => {
    return this.state.todos.filter((item) => item.completed).length;
  };
  onFilter = (key) => {
    this.setState({
      filter: key,
    });
  };
  filterTodos = () => {
    const { filter } = this.state;
    if (filter === FILTERS.active) {
      return this.state.todos.filter((item) => !item.completed);
    } else if (filter === FILTERS.completed) {
      return this.state.todos.filter((item) => item.completed);
    } else {
      return this.state.todos;
    }
  };
  onClear = () => {
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };
  completedAll = () => {
    this.setState({
      todos: this.state.todos.map((item) => ({ ...item, completed: true })),
    });
  };
  render() {
    return (
      <main className="todo-main">
        <AddInput
          todosLength={this.state.todos.length}
          completedTodoLength={this.completedTodoLength()}
          onCreate={this.onCreate}
          completedAll={this.completedAll}
        ></AddInput>
        <List
          todos={this.filterTodos()}
          onBlur={this.onBlur}
          onToggle={this.onToggle}
          onDelete={this.onDelete}
        ></List>
        {this.state.todos.length ? (
          <FilterFooter
            filter={this.state.filter}
            unCompletedTodoLength={this.unCompletedTodoLength()}
            completedTodoLength={this.completedTodoLength()}
            onFilter={this.onFilter}
            onClear={this.onClear}
          ></FilterFooter>
        ) : null}
      </main>
    );
  }
}
