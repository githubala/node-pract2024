const { time } = require('console');
const fs = require('fs');

function getNotes() {
  return 'your notes...';
}

function addNote(title, body) {
  const notes = loadNotes()

  const duplicates = notes.filter(function(note){
    return note.title === title;
  })
  debugger
  if(duplicates.length === 0)
  {
    notes.push({
      title:title,
      body:body
    })  
    saveNotes(notes);
    console.log('title added !');
  } else{
    console.log('title already taken !!')
  }
  
}

function saveNotes(notes){
  console.log(notes);
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes(){     
  try {
    const databuffer = fs.readFileSync('notes.json');
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch(e) {
    return []
  }
}

function deleteNote(title) { 
  const notes = loadNotes();
  const fNotes = notes.filter(t=>{
    return t.title !== title;  
  })
  saveNotes(fNotes);
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  deleteNote: deleteNote
};
