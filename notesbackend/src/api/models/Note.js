const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type : String, 
        required :true,
    },
    notes : {
        type:  String, 
        required:true,
        minlength : 3
    },
});
module.exports = mongoose.model('Note', noteSchema);
