const notes = [];
let counter = 0;

function makeNote(message) {
  return {
    message,
    date: new Date(),
    id: counter++,
    checked: false,
  };
}

function addNote(note) {
  notes.push(note);
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}

function checkNote(id) {
  notes.some((note) => {
    if (note.id === id) {
      note.checked = true;
      return true;
    }
    return false;
  });
}

// Update DOM
function updateNotes() {}

document.querySelector('.addButton').addEventListener('click', (e) => {
  const input = document.querySelector('.input').value;
  const note = makeNote(input);
  addNote(note);
  updateNotes();
});
