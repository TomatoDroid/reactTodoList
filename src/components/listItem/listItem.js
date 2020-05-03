import React, { Component } from "react";
import "./index.scss";

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.editInputRefs = React.createRef();
    this.state = {
      isEdit: false,
      editValue: "",
    };
  }
  onEdit = () => {
    this.setState({
      isEdit: true,
      editValue: this.props.data.text,
    });
    setTimeout(() => {
      this.editInputRefs.current.focus();
    }, 10);
  };
  onBlur = () => {
    this.props.onBlur({ text: this.state.editValue });
    this.setState({
      isEdit: false,
    });
  };
  onChange = (e) => {
    this.setState({
      editValue: e.target.value,
    });
  };
  onToggle = () => {
    this.props.onToggle({
      id: this.props.data.id,
      completed: !this.props.data.completed,
    });
  };
  onDelete = () => {
    this.props.onDelete({ id: this.props.data.id });
  };
  render() {
    const { isEdit, editValue } = this.state;
    const { data } = this.props;
    let fragment;
    if (isEdit) {
      fragment = (
        <input
          value={editValue}
          onBlur={this.onBlur}
          onChange={this.onChange}
          type="text"
          ref={this.editInputRefs}
          className="edit"
        />
      );
    } else {
      fragment = (
        <div>
          <input type="checkbox" className="toggle" onClick={this.onToggle} />
          <label
            className={data.completed ? "completed" : null}
            onDoubleClick={this.onEdit}
          >
            {data.text}
          </label>
          <button className="item-delete" onClick={this.onDelete}>
            ×
          </button>
        </div>
      );
    }
    return <li className="todo-item">{fragment}</li>;
  }
}
