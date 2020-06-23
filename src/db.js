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
    const res = await this.db.remove(pNote);
    return res;
  }

  async updateNote(pNote) {
    pNote.updateAt = new Date();
    const res = await this.db.put(pNote);
    return res;
  }
}
