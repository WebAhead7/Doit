test('makeNote() function', (t) => {
  const { equal } = t;
  const result = makeNote('Do homework!');
  equal(typeof result, 'object');
  equal(result.message, 'Do homework!');
});

test('addNote() function', (t) => {
  const { equal } = t;
  const note = makeNote('Do homework!');
  const result = addNote(note);
  equal(result, notes.length);
  equal(notes[notes.length - 1].message, 'Do homework!');
  deleteNote(note);
});

test('deleteNote() function', (t) => {
  const { equal } = t;
  const note = makeNote('Do homework!');
  const saveLength = notes.length;
  addNote(note);
  deleteNote(note.id);
  equal(saveLength, notes.length);
});

test('checkNote() function', (t) => {
  const { equal } = t;
  const note = makeNote('Do homework!');
  addNote(note);

  equal(note.checked, false);
  checkNote(note.id);
  equal(note.checked, true);
  deleteNote(note.id);
});

// DOM functions test

test('makeNoteDOM() function', (t) => {
  const { equal } = t;
  const note = makeNote('Do homework!');

  const saveCounter = counter;
  const result = makeNoteDOM(note);
  const expected =
    `<label for="${note.id}">` +
    `<input type="checkbox" ` +
    ` id="${saveCounter}" />` +
    `Do homework!<span>delete</span></label>`;
  equal(result, expected);
});

test('addNoteDOM() function', (t) => {
  const { equal } = t;
});
