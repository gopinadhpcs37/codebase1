const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../models/Note');

router.get('/', (req, res, next) => {
    Note.find()
        .exec()
        .then(notes =>{
            console.log(notes); 
            res.status(200).json(notes);
        })
        .catch(error => {
            console.log(error);
            res.status(200).json({ error:error})
        })
});


router.post('/', async (req, res) => {
    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        notes: req.body.notes
    })
    note.save()
    res.status(200).json({  
        _id: note._id,
        title: note.title,
        notes:note.notes
     })
})

module.exports = router;