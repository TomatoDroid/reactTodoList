import React, { Component } from "react";

export class EditInput extends Component {
  constructor(props) {
    super(props);
    this.editInputRefs = React.createRef();
    this.state = {
      value: "",
    };
  }
  onBlur = () => {
    this.props.onBlur(this.state.value);
  };
  onChange = () => {};
  render() {
    const { value } = this.state;
    return (
      <input
        value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
        type="text"
        ref={this.editInputRefs}
        className="edit"
      />
    );
  }
}
