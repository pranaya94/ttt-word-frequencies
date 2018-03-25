const mongoose = require('mongoose');
// const dburl = 'mongodb://localhost:27017/ttt';


mongoose.connect(MONGOLAB_URI);
mongoose.connection.on('connected',() => {
    console.log('mongoose connected to : ' + dburl);
});
mongoose.connection.on('disconnected',() => {
    console.log('mongoose disconnected from : ' + dburl);
});
mongoose.connection.on('error',(err) => {
    console.log('mongoose connection error : ' + err);
});

require('./file.model.js');