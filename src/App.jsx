import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import IndexView from "./views/IndexView";
import NoteView from "./views/NoteView";
import NewView from "./views/NewView";

import DB from "./db";
import NavBar from "./components/NavBar";

class App extends PureComponent {
  db = new DB('Notes');

  state = {
    notes: {},
    loading: true
  };

   handleSave = async (pNote) => {
    let {id} = await this.db.createNote(pNote);

    pNote._id = id;

    const { notes } = this.state;
    this.setState({
      notes: {
        ...notes,
        [id]: pNote
      }
    })

    return id;

  }

  async componentDidMount() {
    const notes = await this.db.getAllNotes();
    this.setState({notes, loading: false});
  }

  renderContent() {

    if(this.state.loading) {
      return <h2>Carregando...</h2>
    }

    return (
      <div className="routes">
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
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar/>
          {this.renderContent()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
