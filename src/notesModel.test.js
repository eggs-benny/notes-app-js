const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  describe('#getNotes', () => {
    it('returns an empty array', () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });

    describe('#addNote', () => {
      it('adds note to the notes array', () => {
        const model = new NotesModel();
        model.addNote('Buy Milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);
      });
    });

    describe('#reset', () => {
      it('adds note to the notes array', () => {
        const model = new NotesModel();
        model.addNote('Buy Milk');
        model.addNote('Go to the gym');
        model.reset();
        expect(model.getNotes()).toEqual([]);
      });
    });
  });
});