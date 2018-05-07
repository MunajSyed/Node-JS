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
    //Check for duplicates in list
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        console.log('no dup');
        notes.push(note);
        saveNotes(notes);
    }
};

var getAll = () =>{
    return fetchNotes();
};

var getNote = (title) =>{
    var notes = fetchNotes();

    var duplicateNotes = notes.filter((note) => note.title === title);
    return duplicateNotes[0];
};

var removeNote = (title) =>{
    var notes = fetchNotes();
    //Check for duplicates in list
    var duplicateNotes = notes.filter((note) => note.title !== title);

    saveNotes(duplicateNotes);

    return notes.length !== duplicateNotes.length;

};

var printNote = (note) =>{
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    printNote
}