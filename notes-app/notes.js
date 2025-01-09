const fs = require('fs');

function getNotes() {
  return 'your notes...';
}

function addNote(title, body) {
  const notes = loadNotes()
  console.log(notes);
}

function loadNotes(){
     const databuffer = fs.readFileSync('notes.json');
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  // try {
  //   const databuffer = fs.readFileSync('notes.json');
  //   const dataJSON = databuffer.toString();
  //   return JSON.parse(dataJSON);
  // } catch(e) {
  //   return []
  // }
}

function removeNote(title) { 
  console.log('remove the' + title );
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
