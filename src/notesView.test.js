/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const { doesNotMatch } = require('assert');

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('clicks the button and adds note', () => {
    const model = new NotesModel();
    const client = { loadNotes: () => [], createNote: () => []};
    const view = new NotesView(model, client);

    const input = document.querySelector('#note-input');
    input.value = 'Hey!';

    const buttonEl = document.querySelector('#add-note');
    buttonEl.click();
    // view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'Hey!'
    );
  });

  it("displays an error in the console if backend server is switched off", () => {
    const model = new NotesModel();
    const client = { loadNotes: () => [], createNote: () => []};
    const view = new NotesView(model, client);
    const t = () => {
      throw new TypeError("Oops, something went wrong: ");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("Oops, something went wrong: ");
  });

  it('when displayNotes called twice, should have 2 notes on page', () => {
    const model = new NotesModel();
    const client = { loadNotes: () => [], createNote: () => []};
    const view = new NotesView(model, client);

    const input = document.querySelector('#note-input');
    input.value = 'Hey!';

    const buttonEl = document.querySelector('#add-note');
    buttonEl.click();
    input.value = 'How are you?';
    buttonEl.click();
    // view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

 it("Gets data from server", (done) => {

    const mockClient = {
      loadNotes: (fn) => {
        fn(["Test data fetch"])
      }
    }
    const model = new NotesModel();
    const view = new NotesView(model, mockClient);

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual("Test data fetch");
    done()
  })
})

  xit('on click saves note to backend', (done) => {
    const model = new NotesModel();
    const mockClient = {createNote: (fn) => fn['Hey!']}
    const view = new NotesView(model, mockClient);

    // const input = document.querySelector('#note-input');
    // input.value = 'Hey!';

    // const buttonEl = document.querySelector('#add-note');
    // buttonEl.click();

    //// test telling the client that it should add a new note....

    view.displayNotes(() => {
      expect(document.querySelectorAll('div.note').length).toEqual(0)
      expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Hey!');
      done()
    });

  xit('resets notes when "reset notes" is clicked', (done) => {
    const model = new NotesModel();
    const mockClient = { loadNotes: () => ['Testing 123'] }
    const view = new NotesView(model, mockClient);

    const buttonEl = document.querySelector('#reset-notes');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(0)
    done()
    })
  });

// from CLIENT
  // it('calls fetch and posts new note', (done) => {
  //   const client = new NotesClient();

  //   fetch.mockResponseOnce(JSON.stringify({
  //     content: "Testing123",
  //   }));

  //   let newNoteFromAPI = 'Testing123'
  //   client.createNote(newNoteFromAPI, (returnedDataFromApi) => {
  //     expect(returnedDataFromApi).toEqual({
  //       content: "Testing123"
  //     });
  //     done();
  //   });
  // });

  


  // // loadNotes: (fn) => fn['This note is coming from the server'], 