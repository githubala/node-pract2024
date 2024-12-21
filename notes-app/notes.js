const fs = require('fs');

function getNotes() {
  return 'your notes...';
}

function addNote(title, body) {
  console.log(title + ' this is the title');
  try {
  } catch (e) {}
}

function removeNote(title) {
  console.log('remove the' + title );
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
