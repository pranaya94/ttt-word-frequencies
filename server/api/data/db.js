const mongoose = require('mongoose');
// const dburl = 'mongodb://localhost:27017/ttt';


// let dburl = 'mongodb://admin:password@ds121289.mlab.com:21289/ttt';
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected',() => {
    console.log('mongoose connected to : ' + process.env.MONGODB_URI);
});
mongoose.connection.on('disconnected',() => {
    console.log('mongoose disconnected from : ' + process.env.MONGODB_URI);
});
mongoose.connection.on('error',(err) => {
    console.log('mongoose connection error : ' + process.env.MONGODB_URI);
});

require('./file.model.js');