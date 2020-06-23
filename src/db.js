import PouchDB from "pouchdb";

export default class DB {
  constructor(name) {
    this.db = new PouchDB(name);
  }

  async getAllNotes() {
    let allNotes = await this.db.allDocs({ include_docs: true });
    let notes = {};

    allNotes.rows.forEach((pNote) => (notes[pNote.id] = pNote.doc));

    return notes;
  }

  async createNote(pNote) {
    pNote.createAt = new Date();
    pNote.updateAt = new Date();

    const res = await this.db.post({ ...pNote });

    return res;
  }

  async removeNote(pNote) {
    let note = await this.db.remove(pNote);
    console.log(note);
    return note;
  }

  async updateNote(pNote) {}
}
