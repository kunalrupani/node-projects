//console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
          var noteString = fs.readFileSync('notes-data.json');
          return JSON.parse(noteString);
        } catch (e){
          return[]; 
       }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body)=> {
 var notes = fetchNotes();
 var note = {
     title,
     body
 };  

var duplicateNotes = notes.filter((note) => note.title == title);

if(duplicateNotes.length == 0){
    notes.push(note);
    saveNotes(notes);
    return note;
 }
};

var getAll = ()=> {
 console.log('Getting all notes....');
};

var readNote = (title)=> {
 var notestr=fetchNotes();
 var note2read = notestr.filter((notestr) => notestr.title == title);
 //console.log(note2read[0].body);
 return note2read[0];
};

var deleteNote = (title)=> {
    var notes=fetchNotes();
    var newstr = notes.filter((notes)=> notes.title!=title);
    saveNotes(newstr);
    return notes.length != newstr.length;
};

module.exports = {
 addNote,
 getAll,
 readNote,
 deleteNote
};