import React, { useState, createContext } from "react";
import store from "../store";
import { acAddNote, acRemoveNote, acUpdateNote } from "../reducers/actions";

const actions = {
  onAddNote: (pNote) => {
    store.dispatch(acAddNote(pNote));
  },
  onRemoveNote: (pNote) => {
    store.dispatch(acRemoveNote(pNote));
  },
  onUpdateNote: (pNote) => {
    store.dispatch(acUpdateNote(pNote));
  },
};

const NotesContext = createContext();
NotesContext.displayName = "NotesContext";

export const NotesConsumer = NotesContext.Consumer;

export const NotesProvider = (props) => {
  return (
    <NotesContext.Provider value={{ ...props.value, ...actions }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
