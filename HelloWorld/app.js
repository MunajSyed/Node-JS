console.log('Starting App!');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0];

console.log(command);
console.log(argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list'){
    notes.getAll();
}
else if (command === 'read'){
    notes.getNote(argv.title);
}
else if (command === 'remove'){
    notes.removeNote(argv.title);
}
else {
    console.log('Command not recognized');
}
// fs.appendFile('greetings.txt', 'Hello ' + user.username + `! Age: ${notes.age}`, function (err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });
