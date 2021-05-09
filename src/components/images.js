import React, { Component } from "react";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { calu:  };
  }

  componentWillUnmount() {
    console.log("Images component will un mount");
    clearInterval(this.state.calu);
  }
  componentDidMount() {
    console.log("Image did mount");
    this.setState({
      calu: setInterval(() => {
        console.log("hello");
      }, 1000),
    });
  }
  render() {
    return (
      <img src="https://images.unsplash.com/photo-1611095973763-414019e72400?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" />
    );
  }
}
