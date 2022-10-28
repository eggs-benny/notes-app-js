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

  reset() {
    this.model = []
    return this.model
  }
  
  setNotes(notes) {
    this.model = notes
  }
}

module.exports = NotesModel;