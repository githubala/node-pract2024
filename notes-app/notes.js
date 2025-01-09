const fs = require('fs');

function getNotes() {
  return 'your notes...';
}

function addNote(title, body) {
  console.log(title + ' this is the title');
  const databuffer = fs.readFileSync(notes.json);
  const dataStr = databuffer.toString();
  console.log(dataStr);
}

function removeNote(title) { 
  console.log('remove the' + title );
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
