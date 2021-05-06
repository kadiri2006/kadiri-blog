import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "testing" };
  }
  render() {
    return <h1>{this.state.title}</h1>;
  }
}
// let App = () => {
//   return <h1>testing ok</h1>;
// };

export default App;
