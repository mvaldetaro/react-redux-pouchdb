import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import IndexView from "./views/IndexView";
import NoteView from "./views/NoteView";
import NewView from "./views/NewView";

import NavBar from "./components/NavBar";

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

  handleSave = (note) => {
    let ids = Object.keys(this.state.notes);
    const id = Math.max(...ids) + 1;

    note['_id'] = id;

    const { notes } = this.state;
    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    })

    return id;

  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar/>
          <div className="routes"></div>
          <Route
            exact
            path="/"
            component={(props) => (
              <IndexView {...props} notes={this.state.notes} />
            )}
          />
          <Route
            exact
            path="/notes/:id"
            component={(props) => (
              <NoteView {...props} note={this.state.notes[props.match.params.id]}  />
            )}
          />
          <Route
            exact
            path="/new"
            component={(props) => (
              <NewView {...props} onSave={this.handleSave}  />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
