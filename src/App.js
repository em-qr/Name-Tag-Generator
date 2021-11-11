import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: []
  };
  /* add addName method to add new names to array*/
  addName = (name) => {
    /*adding new names array to the old array
    use "name" as a new prop i.e adding a new "name"*/
    const newNames = [name, ...this.state.names];
    /* setState= old array is now new array */
    this.setState({ names: newNames });
  };
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  componentDidMount() {
    const savedNamesArray = localStorage.getItem("savedNames");
    if (savedNamesArray) {
      const savedNames = JSON.parse(savedNamesArray);
      this.setState({ names: savedNames });
    }
  }
  componentDidUpdate() {
    const savedNamesArray = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesArray);
  }

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
