import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { addTodo, completedAll } from "../../store/action";
import { getCompleted } from "../../store/selector";

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onAdd = (e) => {
    if (e.key !== "Enter") return;
    this.props.addTodo(this.state.value);
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
    return (
      <div className="todo-input-wrapper">
        {this.props.todosLength > 0 ? (
          <label
            className={`tiw-toggle-all ${
              this.props.todosLength === this.props.completedTodosLength
                ? "all-check"
                : null
            }`}
            onClick={this.props.completedAll}
          ></label>
        ) : null}
        <input
          value={this.state.value}
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

const mapStateToProps = (state) => {
  return {
    todosLength: state.todos.length,
    completedTodosLength: getCompleted(state.todos).length,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    addTodo: (value) => {
      dispatch(addTodo(value));
    },
    completedAll: () => {
      dispatch(completedAll());
    },
  };
};

AddInput = connect(mapStateToProps, mapStateToDispatch)(AddInput);

export default AddInput;
