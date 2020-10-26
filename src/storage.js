const { localStorage, addEventListener } = window;

addEventListener('beforeunload', () => {
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('counter', counter);
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
    counter = Number(localStorage.getItem('counter'));

    // Add notes to DOM when we open the webpage
    notes.forEach((note) => {
      addNoteDOM(note);
    });
  }
});
