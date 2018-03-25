const mongoose = require('mongoose');
// const dburl = 'mongodb://localhost:27017/ttt';
const dburl = 'mongodb://pranaya:password@ds123619.mlab.com:23619/ttt'

mongoose.connect(dburl);
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