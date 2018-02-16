import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            variable: "Viewer",
            number: "0"
        };
    }
    render() {
        return (<div>
                <h1>Hello World {this.state.variable}</h1>
                <h3>{this.state.number}</h3>
                <button className="hello" onClick={() => this.setState({number: "1"})}>
                Button</button>
            </div>);
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));