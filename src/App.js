import React, { PureComponent } from "react";
import "./App.css";
import IndexView from "./views/IndexView";

class App extends PureComponent {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "Hello Word do sucesso!",
        body:
          "PouchDB is a JavaScript-based database that runs on the server and on the browser and that is able to sync when the network is available.",
        updateAt: new Date(),
      },
      2: {
        _id: 2,
        title: "Javacript",
        body: "Build Offline-First Apps for Web and React Native",
        updateAt: new Date(),
      },
    },
  };

  render() {
    return (
      <div className="App">
        <IndexView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
