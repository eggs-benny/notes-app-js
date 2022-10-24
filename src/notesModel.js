class NotesModel {
  constructor() {
    this.model = []
  }

  getNotes() {
    return this.model
  }

  addNote(note) {
    this.model.push(note)
  }
}

module.exports = NotesModel;