const mongoose  = require('mongoose');

const fileSchema = new mongoose.Schema({
    data : {
        type : String,
        required : false
    }
});

mongoose.model('File',fileSchema,'files'); //name of model, schema and collection in db