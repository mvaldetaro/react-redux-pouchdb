import PouchDB from "pouchdb";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import PouchDBStorage from "redux-persist-pouchdb";

import notesReducer from "./reducers/notes";
import authReducer from "./reducers/auth";
import userReducer from "./reducers/user";

const pouchdb = new PouchDB("test");
const storage = new PouchDBStorage(pouchdb);

const userPersistConfig = {
  key: "user",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
};

const notesPersistConfig = {
  key: "notes",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  notes: persistReducer(notesPersistConfig, notesReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

//const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// Conecta com plugin REDUX no Chrome
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Cria store
const store = createStore(rootReducer, devTools);
const persistor = persistStore(store);

export { store, persistor };
