console.log("Inside notes");

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        console.log('no dup');
        notes.push(note);
        saveNotes(notes);
    }
};

var getAll = () =>{
    var notes = fetchNotes();
    console.log(notes);
};

var getNote = (title) =>{
    console.log('Getting note', title);
};

var removeNote = (title) =>{
    console.log('Removing note', title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}