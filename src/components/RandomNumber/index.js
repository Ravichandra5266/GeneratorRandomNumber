import { Component } from "react";
import "./index.css";

class RandomNumber extends Component {
  state = {
    RandomNumber: 0,
  };
  onGenerateRandomNumber = () => {
    const customNo = Math.ceil(Math.random() * 100);
    this.setState({
      RandomNumber: customNo,
    });
  };
  render() {
    const { RandomNumber } = this.state;
    return (
      <div className="container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate Random Number In The Range Of 1 To 100</p>
          <h1>{RandomNumber}</h1>
          <button type="button" onClick={this.onGenerateRandomNumber}>
            Click
          </button>
        </div>
      </div>
    );
  }
}
export default RandomNumber;
