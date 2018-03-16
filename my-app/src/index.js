import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            variable: "Viewer",
            number1: 0,
            number2: 4,
        };
    }
    render() {

        return (<div>
                    <h1>Hello World {this.state.variable}</h1>
                    <ul>
                        <li>First Number: {this.state.number1}</li>
                        <li>Second Number: {this.state.number2}</li>
                        <li>Add: {this.state.number1} + {this.state.number2}</li>
                        <li>Sum: {this.state.number1 + this.state.number2}</li><br/>
                        <li id="random">Random Number: {Math.random()}</li>
                    </ul>
                    <button className="hello" onClick={() => this.setState({number1: this.state.number1 + 1})}>
                    Add 1 to number1: {this.state.number1}</button>
                    &nbsp;
                    <button className="hello" onClick={() => this.setState({number2: this.state.number2 - 1})}>
                    Subtract 1 from number2: {this.state.number2}</button>
                </div>);
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));