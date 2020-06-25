import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { NotesProvider } from "./contexts/notesContext";

import { store, persistor } from "./store";

import IndexView from "./views/IndexView";
import NoteView from "./views/NoteView";
import NewView from "./views/NewView";

import DB from "./db";
import NavBar from "./components/NavBar";
import FindBar from "./components/FindBar";

import "./App.css";

class App extends PureComponent {
  //db = new DB("Notes");

  state = {
    notes: {},
    loading: false,
  };

  // handleSave = async (pNote) => {
  //   let xRes = {};

  //   if (pNote._id) {
  //     xRes = await this.db.updateNote(pNote);
  //   } else {
  //     xRes = await this.db.createNote(pNote);
  //   }

  //   pNote._id = xRes.id;
  //   pNote._rev = xRes.rev;

  //   const { notes } = this.state;
  //   this.setState({
  //     notes: {
  //       ...notes,
  //       [xRes.id]: pNote,
  //     },
  //   });

  //   return xRes.id;
  // };

  // handleRemove = async (pNote) => {
  //   await this.db.removeNote(pNote);
  //   const notes = await this.db.getAllNotes();

  //   this.setState({ notes });
  // };

  // handleFind = async (pValue) => {
  //   const notes = await this.db.search(pValue);

  //   console.log(notes);
  //   //this.setState({notes});
  // };

  // getRevisions = async (pId) => {
  //   const xRevs = await this.db.revisions(pId);
  //   return xRevs;
  // };

  // getNotes = async () => {
  //   const notes = await this.db.getAllNotes();
  //   this.setState({ notes, loading: false });
  // };

  // async componentDidMount() {
  //   await this.getNotes();
  // }

  renderContent() {
    if (this.state.loading) {
      return <h2>Carregando...</h2>;
    }

    return (
      <div className="routes">
        <Route
          exact
          path="/"
          component={(props) => (
            <IndexView
              {...props}
              notes={this.state.notes}
              //onRemove={this.handleRemove}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          component={(props) => (
            <NoteView
              {...props}
              note={this.state.notes[props.match.params.id]}
            />
          )}
        />
        <Route
          exact
          path="/new"
          component={(props) => <NewView {...props} />}
        />
        <Route
          exact
          path="/update/:id"
          component={(props) => (
            <NewView
              {...props}
              note={this.state.notes[props.match.params.id]}
            />
          )}
        />
      </div>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <div className="app">
              <NavBar />
              <FindBar onFind={this.handleFind} />
              {this.renderContent()}
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
