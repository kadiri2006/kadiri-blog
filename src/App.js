import React from "react";
import "./assets/css/style.css";
// let App = () => {
//   return <div className="box">testing ok..</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
    this.afterClick = this.afterClick.bind(this);
  }
  afterClick() {
    this.setState((state) => ({
      display: !this.state.display,
    }));
  }

  render() {
    return (
      <div>
        <div className="box">
          <h1>iam testing</h1>
        </div>
        <div className="btn">
          <button type="button" onClick={this.afterClick}>
            {this.state.display ? "button on" : null};
          </button>
        </div>
        <div>{this.state.display ? <img
  className="image"
  src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
/>: null};</div>
      </div>
    );
  }
}

export default App;

//  <img
//   className="image"
//   src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
// />
