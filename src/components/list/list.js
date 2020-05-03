import React, { Component } from "react";
import "./index.scss";
import { ListItem } from "../listItem/listItem";

export class List extends Component {
  constructor(props) {
    super(props);
  }
  onBlur = (data) => {
    this.props.onBlur(data);
  };
  onToggle = (data) => {
    this.props.onToggle(data);
  };
  onDelete = (data) => {
    this.props.onDelete(data);
  };
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            data={todo}
            onBlur={this.onBlur}
            onToggle={this.onToggle}
            onDelete={this.onDelete}
          ></ListItem>
        ))}
      </ul>
    );
  }
}
