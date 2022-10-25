const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const model = new NotesModel();
const view = new NotesView(model);


console.log('hello, world')
console.log(model.getNotes())

model.addNote('This is an example note')
model.addNote('This is another one')
model.addNote('And a third for good luck')
view.displayNotes()