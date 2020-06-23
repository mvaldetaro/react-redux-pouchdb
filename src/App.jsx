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
    let xRes = {};

    if(pNote._id) {
      xRes = await this.db.updateNote(pNote);
    } else {
      xRes = await this.db.createNote(pNote);
    }

    pNote._id = xRes.id;
    pNote._rev = xRes.rev;

    const { notes } = this.state;
    this.setState({
      notes: {
        ...notes,
        [xRes.id]: pNote
      }
    })

    return xRes.id;
  }

  handleRemove = async (pNote) => {
    await this.db.removeNote(pNote);
    const notes = await this.db.getAllNotes();

    this.setState({notes});

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
              <IndexView {...props} notes={this.state.notes} onRemove={this.handleRemove} />
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
          <Route
            exact
            path="/update/:id"
            component={(props) => (
              <NewView {...props} note={this.state.notes[props.match.params.id]} onSave={this.handleSave}  />
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
