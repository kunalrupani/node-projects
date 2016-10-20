//console.log('Starting app.');

// System Requires
const fs = require('fs');

// Third Party from NPM
const _ = require('lodash');
const yargs = require('yargs');

// My own packages
const notes = require('./notes.js');


const argv = yargs
 .command('add', 'Add a new note', {
   title: {
    describe: 'Title of note',
    demand: true,
    alias: 'a'
 },
    body:{
    describe: 'Body of note',
    demand:true,
    alias: 'b'
    }
 })
.help()
.argv;

var command = argv._[0];
//console.log('Yargs',argv);

if (command == 'add'){
   var note = notes.addNote(argv.title,argv.body);
   if(note){
    console.log('Note created...');
   }else {
    console.log('Note creation failed as it was a duplicate...');
   }

} else if (command == 'list'){
    notes.getAll();
} else if (command == 'read'){
    var note=notes.readNote(argv.title);
    if(note){
     console.log('Title: ' + note.title);
     console.log('Body: ' + note.body);
    }
    else {
        console.log('Note not found');
    }

} else if (command == 'delete'){
   var noteRemoved = notes.deleteNote(argv.title);
   var message = noteRemoved ? 'Note was removed': 'Note not found';
   console.log(message);
} else {
console.log('Command not recognized');
}



