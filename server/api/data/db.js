const mongoose = require('mongoose');
// const dburl = 'mongodb://localhost:27017/ttt';


let dburl = 'mongodb://admin:password@ds121289.mlab.com:21289/ttt';
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(dburl);
mongoose.connection.on('connected',() => {
    console.log('mongoose connected to : ' + dburl);
});
mongoose.connection.on('disconnected',() => {
    console.log('mongoose disconnected from : ' + dburl);
});
mongoose.connection.on('error',(err) => {
    console.log('mongoose connection error : ' + dburl);
});

require('./file.model.js');