import DB from "../db";
import store from "../store";

const pouchdb = new DB("Notes");

export default async function persister(pActionReducer) {
  const { id } = await pouchdb.createNote(pActionReducer.payload);
  const xDoc = await pouchdb.readOneNote(id);
  const xReducer = {
    ...pActionReducer,
    payload: xDoc,
  };

  store.dispatch(xReducer);
}
