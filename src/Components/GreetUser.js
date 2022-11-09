import React, { Component } from "react";

class GreetUser extends Component {
  constructor(prop) {
    super(prop);
    this.state = { username: "User" };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.username}!</h1>
        <button onClick={() => this.setState({ username: "nairitya" })}>
          Sign In
        </button>
      </div>
    );
  }
}

export default GreetUser;
