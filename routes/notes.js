const noteT = require('express').Router();
const notesHolder = require('../holder/notes')

noteT.get('/', notesHolder.getNotes)

noteT.post('/', notesHolder.newNote)

noteT.delete('/:id', notesHolder.removeNote)

module.exports = noteT 