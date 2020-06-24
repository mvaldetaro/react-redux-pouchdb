import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initState = {
  notes: {},
};

// Actions

function notes(state = initState, action) {
  const xNotes = { ...state.notes };
  switch (action.type) {
    case "ADD_NOTE":
      return {
        notes: {
          ...state.notes,
          [action.payload._id]: action.payload,
        },
      };
    case "REMOVE_NOTE":
      delete xNotes[action.payload._id];
      return {
        notes: xNotes,
      };
    case "UPDATE_NOTE":
      xNotes[action.payload._id] = action.payload;
      return {
        notes: xNotes,
      };

    default:
      return state;
  }
}

let store = applyMiddleware(thunk)(createStore)(notes, devTools);

store.subscribe(() => console.log(store.getState()));

export default store;
