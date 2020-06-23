import PouchDB from "pouchdb";
import find from "pouchdb-find";
PouchDB.plugin(find);

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
    console.log(pNote);
    pNote.updateAt = new Date();
    const res = await this.db.put(pNote);

    console.log(res);

    return res;
  }

  async revisions(pId) {
    console.log(pId);

    const res = await this.db.get(String(pId), {
      revs: true,
      revs_info: true,
      open_revs: "all",
    });

    console.log(res);

    return res;
  }

  async search(pValue) {
    console.log(pValue);

    const res = await this.db.find({
      selector: {
        title: { $regex: String(pValue) },
      },
    });

    console.log(res);

    return res;
  }
}
