const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// Opens DB for either GET or POST
const db = fs.readFileSync('./db/db.json', 'utf8')
const dataJSON = JSON.parse(db)

// Write file handler
const writer = (newNotes) => {
    fs.writeFile('./db/db.json', newNotes, err => {
        if (err) {
            console.error(err)
            return
        }
        console.info('Notes added')
    })
}

// POST handler for new note
const newNote = (req, res, next) => {
    const note = req.body
    note.id = uuidv4()
    dataJSON.push(note)
    const newNotes = JSON.stringify(dataJSON)
    writer(newNotes)
};

// GET returns notes 
const getNotes = (req, res, next) => {
    res.send(dataJSON)
};

// Handles Delete of note
const removeNote = (req, res, next) => {
    const noteID = req.params.id
    const noteIndex = dataJSON.findIndex(x => x.id === noteID);
    if (noteIndex > -1) { 
        dataJSON.splice(noteIndex, 1)
        writer(JSON.stringify(dataJSON))
    }
};
module.exports = {newNote, getNotes, removeNote};