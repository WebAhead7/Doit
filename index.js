const notes = [];
let counter = 0;

function makeNote(message) {
  return {
    message,
    date: new Date(),
    id: counter++,
    checked: false,
    trash:false  
  };
}

function addNote(note) {
  notes.push(note);
}

function deleteNote(id) {
  //notes = notes.filter((note) => note.id !== id);
  notes.some((note) => {
    if (note.id === id) {
      note.delete = true;
      return true;
    }
    return false;
  });
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
  const list = document.querySelector('.list');
  const note = makeNote(input);
  addNote(note);
  
  const listElement = document.createElement("li");
  const label = document.createElement('label');
  const checkBtn = document.createElement('input');
  checkBtn.setAttribute("type", "checkbox");
  const text = document.createTextNode(input);
  const span = document.createElement("span");
  const spanTxt = document.createTextNode("delete");
  listElement.appendChild(label);
  label.appendChild(checkBtn);
  label.appendChild(text);
  span.appendChild(spanTxt);
  label.appendChild(span);
  list.appendChild(listElement);
  
  document.querySelector('.input').value = "";

   
});




