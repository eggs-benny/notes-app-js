const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  describe('#getNotes', () => {
    fit('returns an empty array', () => {
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

//     it("doesn't add 3rd roll into frame", () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       frame.addRolls(1);
//       expect(frame.frameArr()).toEqual([6, 1]);
//     });
//   });

//   describe('#sumRolls', () => {
//     it('sums rolls in a frame to return a raw score', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.sumRolls()).toEqual(7);
//     });
//   });

//   describe('#isSpare', () => {
//     it('returns true if sum = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(9);
//       frame.addRolls(1);
//       expect(frame.isSpare()).toEqual(true);
//     });
//     it('returns false if sum != 10', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.isSpare()).toEqual(false);
//     });
//     it('returns false if first roll = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(10);
//       expect(frame.isSpare()).toEqual(false);
//     });
//   });

//   describe('#isStrike', () => {
//     it('returns first roll = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(10);
//       expect(frame.isStrike()).toEqual(true);
//     });
//     it('returns false if first roll != 10', () => {
//       const frame = new Frame();
//       frame.addRolls(9);
//       frame.addRolls(1);
//       expect(frame.isStrike()).toEqual(false);
//     });
//     it('returns false if second roll = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(0);
//       frame.addRolls(10);
//       expect(frame.isStrike()).toEqual(false);
//     });
//   });

//   describe('#isComplete', () => {
//     it('is true if frame has two rolls', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.isComplete()).toEqual(true);
//     });
//     it('is false if frame has one roll <10', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       expect(frame.isComplete()).toEqual(false);
//     });
//     it("is true if frame's 1st roll = 10", () => {
//       const frame = new Frame();
//       frame.addRolls(10);
//       expect(frame.isComplete()).toEqual(true);
//     });
//   });
// });
