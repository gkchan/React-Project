import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            variable: "Viewer"
        };
    }
    render() {
        return (<div>Hello World {this.state.variable}</div>);
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));