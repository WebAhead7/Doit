const notes = [];

function makeNote(message) {
  return {
    message,
    date: new Date(),
    id: 3,
  };
}

function addNote(note) {}

function deleteNote(id) {}

function checkNote(id) {}

function updateNotes(params) {}

document.querySelector('.addButton').addEventListener('click', (e) => {
  const input = document.querySelector('.input').value;
  const note = makeNote(input);
  addNote(note);
});
