import React, { Component } from "react";
import "./index.scss";
import { FILTERS } from "../../constants/filter";

export class FilterFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFilter = (key) => {
    this.props.onFilter(key);
  };
  onClear = () => {
    this.props.onClear();
  };
  render() {
    const { filter, unCompletedTodoLength, completedTodoLength } = this.props;
    const filterTitles = [
      { key: FILTERS.all, value: "All" },
      { key: FILTERS.active, value: "Active" },
      { key: FILTERS.completed, value: "Completed" },
    ];
    return (
      <footer className="todo-footer-wrapper">
        <span className="tfw-count">
          <span>
            {unCompletedTodoLength}{" "}
            {unCompletedTodoLength <= 1 ? "item" : "items"} left
          </span>
        </span>
        <ul className="tfw-filter">
          {filterTitles.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={filter === item.key ? "selected" : null}
                onClick={() => this.handleFilter(item.key)}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        {completedTodoLength > 0 ? (
          <button className="tfw-clear" onClick={this.onClear}>
            Clear completed
          </button>
        ) : null}
      </footer>
    );
  }
}
