const router = require('express').Router();
const { getNotes, saveNote, deleteNote } = require('../../Develop/public/assets/js/index');
const { notes } = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = getNotes(req.query, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.note = notes.length.toString();

    const note = saveNote(req.body.note);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    req.body.id = notes.length.toString();

    const note = deleteNote(req.body.note);
    res.json(note);
});

module.exports = router;