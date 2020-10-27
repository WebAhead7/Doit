function makeNote(message) {
  return {
    message,
    date: new Date(),
    id: ++counter,
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

// DOM functions

function makeNoteDOM(note) {
  return (
    `<label for="${note.id}">` +
    `<input type="checkbox"  id="${note.id}" />` +
    `${note.message}<span>delete</span></label>`
  );
}
function addNoteDOM(note) {
  const list = document.querySelector('ul');
  const listElem = document.createElement('li');
  listElem.innerHTML = makeNoteDOM(note);

  // Add event listener to delete span
  listElem.childNodes[0].childNodes[2].addEventListener(
    'click',
    spanEventListener
  );

  // Add note to the list
  list.appendChild(listElem);
}

document.querySelector('.addButton').addEventListener('click', () => {
  const input = document.querySelector('.input').value;
  const note = makeNote(input);
  addNote(note);
  addNoteDOM(note);
});

const spanEventListener = (e) => {
  const listElem = e.path[2];
  const id = Number(listElem.childNodes[0].childNodes[0].id);
  deleteNote(id);
  listElem.remove();
};
