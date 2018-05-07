const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');
//Variables to be used inside the .command() functions below in argv
var titlePrint = {
        describe:'Title of Note', //Will display the command --title Title of note to user if no title entered
        demand: true,
        alias: 't' //Flag title so u can use -t instead of --title
};
var bodyPrint = {
        describe:'Body of Note', //Will display the command --title Title of note to user if no title entered
        demand: true,
        alias: 'b' //Flag title so u can use -t instead of --title
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titlePrint,
        body: bodyPrint
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note',{
        titlePrint
    })
    .command('remove', 'Remove note',{
        titlePrint
    })
    .help()
    .argv;
var command = argv._[0];

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list'){
    var allNote = notes.getAll();
    console.log(`Printing ${allNote.length} note`);
    allNote.forEach((note) => notes.printNote(note));
}
else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Note found');

        notes.printNote(note);
    }else{
        console.log('Note not found');
    }
}
else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'Note was removed' : 'Not was not removed';
    console.log(message);

    // if(noteRemoved){
    //     console.log("Removed");
    // }else{
    //     console.log("Not Removed");
    // }
}
else {
    console.log('Command not recognized');
}
// fs.appendFile('greetings.txt', 'Hello ' + user.username + `! Age: ${notes.age}`, function (err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });
