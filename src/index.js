import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactJson from "react-json-view";
import SortableTree from "react-sortable-tree";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState(data);
      });
  }

  render() {
    return (
      <div className="App">
        <section>
          <ReactJson src={this.state} onEdit="true" />
        </section>
        <section>
          <SortableTree treeData={this.state} />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
