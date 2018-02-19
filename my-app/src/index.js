import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            variable: "Viewer",
            number: 0,
            number2: 4,
        };
    }
    render() {

        return (<div>
                <h1>Hello World {this.state.variable}</h1>
                <ul>
                    <li>{this.state.number}</li>
                    <li>{this.state.number2}</li>
                    <li>{this.state.number} + {this.state.number2}</li>
                    <li>{this.state.number + this.state.number2}</li>
                </ul>
                <button className="hello" onClick={() => this.setState({number: 1})}>
                Change number1: {this.state.number}</button>
                <button className="hello" onClick={() => this.setState({number2: 3})}>
                Change number2: {this.state.number2}</button>
            </div>);
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));