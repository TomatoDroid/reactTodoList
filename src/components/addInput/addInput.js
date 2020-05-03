import React, { Component } from "react";
import "./index.scss";

export class AddInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onCompletedAll = () => {
   this.props.completedAll()
  };
  // onInput = (e) => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };
  onAdd = (e) => {
    if (e.key !== "Enter") return;
    this.props.onCreate(this.state.value);
    this.setState({
      value: "",
    });
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { value } = this.state;
    const { todosLength, completedTodoLength } = this.props;
    return (
      <div className="todo-input-wrapper">
        {todosLength > 0 ? (
          <label
            className={`tiw-toggle-all ${
              todosLength === completedTodoLength ? "all-check" : null
            }`}
            onClick={this.onCompletedAll}
          ></label>
        ) : null}
        <input
          value={value}
          // onInput={this.onInput}
          onKeyUp={this.onAdd}
          onChange={this.onChange}
          placeholder="What needs to be done?"
          type="text"
          className="tiw-input"
        />
      </div>
    );
  }
}
