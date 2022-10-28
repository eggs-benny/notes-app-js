class NotesClient {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Oops, something went wrong: ', error);
      })
      .then((data) => {
        callback(data);
      });
  }

  createNote(note) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: note,
      }),
    };
    fetch('http://localhost:3000/notes', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

      })
      .catch((error) => {
        console.error('Oops, something went wrong: ', error);
      });
  }

  resetNotes() {
    const requestOptions = {
      method: 'DELETE',
    };
    fetch('http://localhost:3000/notes', requestOptions).then((response) =>
      response.json()
    );
  }
}
module.exports = NotesClient;
