import React, { Component } from "react";
import Images from "./components/images";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posi: false, textApp: "this is my title" };
    console.log("app cons");
  }
  componentDidUpdate() {
    console.log("app did update");
  }

  clickHandler = () => {
    this.setState({ posi: !this.state.posi });
  };

  render() {
    console.log("app rende");
    return (
      <div>
        <h1> {this.state.textApp}</h1>
        <div>
          <button onClick={this.clickHandler}>click here</button>
        </div>
        {this.state.posi ? <Images /> : null}
      </div>
    );
  }
}
