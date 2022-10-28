(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/notesModel.js
  var require_notesModel = __commonJS({
    "src/notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.model = [];
        }
        getNotes() {
          return this.model;
        }
        addNote(note) {
          this.model.push(note);
        }
        reset() {
          this.model = [];
          return this.model;
        }
        setNotes(notes) {
          this.model = notes;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // src/notesView.js
  var require_notesView = __commonJS({
    "src/notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note").addEventListener("click", () => {
            const newNote = document.querySelector("#note-input").value;
            this.addNewNote(newNote);
          });
          document.querySelector("#reset-notes").addEventListener("click", () => {
            this.resetNotes();
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
          document.querySelector("#note-input").value = "";
          this.client.createNote(newNote);
        }
        resetNotes() {
          this.model.reset();
          this.client.resetNotes();
          document.querySelectorAll(".note").forEach((note) => {
            note.remove();
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((note) => {
            note.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        displayNotesFromApi() {
          this.client.loadNotes((notes) => {
            this.model.setNotes(notes);
            this.displayNotes();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // src/notesClient.js
  var require_notesClient = __commonJS({
    "src/notesClient.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).catch((error) => {
            console.error("Oops, something went wrong: ", error);
          }).then((data) => {
            callback(data);
          });
        }
        createNote(note) {
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              content: note
            })
          };
          fetch("http://localhost:3000/notes", requestOptions).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
          }).catch((error) => {
            console.error("Oops, something went wrong: ", error);
          });
        }
        resetNotes() {
          const requestOptions = {
            method: "DELETE"
          };
          fetch("http://localhost:3000/notes", requestOptions).then(
            (response) => response.json()
          );
        }
      };
      module.exports = NotesClient2;
    }
  });

  // src/index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesClient = require_notesClient();
  var client = new NotesClient();
  var model = new NotesModel();
  var view = new NotesView(model, client);
  view.displayNotesFromApi();
})();
