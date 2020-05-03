import React, { Component } from "react";

export class Item extends Component {
  constructor(props) {
    super(props);
  }
  onToggle = () => {};
  onEdit = () => {};
  onDelete = () => {};
  render() {
    const { data } = this.props;
    return (
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
}
