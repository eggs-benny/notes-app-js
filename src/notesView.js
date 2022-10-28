class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    document.querySelector('#add-note').addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote);
    });
    document.querySelector('#reset-notes').addEventListener('click', () => {
      this.resetNotes();
    })
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);

    this.displayNotes();
    document.querySelector('#note-input').value = '';
    this.client.createNote(newNote);
  }

  resetNotes() {
    this.model.reset();
    this.client.resetNotes();
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    });
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

//  displayError() {
//   if (this.client.loadNotes() === "") {
//     this.mainContainerEl.append("ERROR")
//   }
//  } 

  // emojifyNote(note) {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       text: note,
  //     }),
  //   };
  //   fetch('https://makers-emojify.herokuapp.com/', requestOptions)
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log(data.emojified_text)
  //       return data.emojified_text
  //       })
  // }
}

module.exports = NotesView;
