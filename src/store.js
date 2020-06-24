import PouchDB from "pouchdb";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import notes from "./reducers/notes";

// Conecta com plugin REDUX no Chrome
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Cria store
let store = applyMiddleware(thunk)(createStore)(notes, devTools);

export default store;
