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
      };
      module.exports = NotesModel2;
    }
  });

  // src/notesView.js
  var require_notesView = __commonJS({
    "src/notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // src/index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var view = new NotesView(model);
  console.log("hello, world");
  console.log(model.getNotes());
  model.addNote("This is an example note");
  model.addNote("This is another one");
  model.addNote("And a third for good luck");
  view.displayNotes();
})();
