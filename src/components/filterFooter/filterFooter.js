import React, { Component } from "react";
import "./index.scss";
import { FILTERS } from "../../constants/filter";
import { connect } from "react-redux";
import {
  setVisibilityFilter,
  clearCompletedTodo,
} from "../../store/action/index";
import { getCompleted, getUnCompleted } from "../../store/selector";

class FilterFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClear = () => {
    this.props.onClear();
  };
  render() {
    const filterTitles = [
      { key: FILTERS.all, value: "All" },
      { key: FILTERS.active, value: "Active" },
      { key: FILTERS.completed, value: "Completed" },
    ];
    return (
      <footer className="todo-footer-wrapper">
        <span className="tfw-count">
          <span>
            {this.props.itemsLeft}{" "}
            {this.props.itemsLeft <= 1 ? "item" : "items"} left
          </span>
        </span>
        <ul className="tfw-filter">
          {filterTitles.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={this.props.filter === item.key ? "selected" : null}
                onClick={() => this.props.onFilter(item.key)}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        {this.props.completedCount > 0 ? (
          <button className="tfw-clear" onClick={this.props.clearTodo}>
            Clear completed
          </button>
        ) : null}
      </footer>
    );
  }
}

const mapStateToState = (state) => {
  return {
    filter: state.visibilityFilter,
    itemsLeft: getUnCompleted(state.todos).length,
    completedCount: getCompleted(state.todos).length,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onFilter: (filter) => {
      dispatch(setVisibilityFilter(filter));
    },
    clearTodo: () => {
      dispatch(clearCompletedTodo());
    },
  };
};

FilterFooter = connect(mapStateToState, mapStateToDispatch)(FilterFooter);

export default FilterFooter;
