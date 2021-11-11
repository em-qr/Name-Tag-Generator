import React, { Component } from "react";

class UserInput extends Component {
  /*state , callback, event handler, end with setState */
  state = { name: "" }; /* <-------name being added to names array!!*/
  /* event handler - to capture user info added*/
  updateName = (event) => this.setState({ name: event.target.value });
  /* method - puts submit section back to zero after adding new name*/
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(
      this.state.name
    ); /* <----add method calling to new name you want added*/
    this.setState({ name: "" });
  };

  render() {
    return (
      /* use state inJSX, event Listener,
onSubmit method goes onto form not in it!*/
      <div className="input-data">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new name here"
            onChange={this.updateName}
          />
          <input type="submit" value="Create name tag" />
        </form>
      </div>
    );
  }
}

export default UserInput;
