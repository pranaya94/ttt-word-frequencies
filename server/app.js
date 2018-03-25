require('./api/data/db.js');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

let freqCtrl = require('./api/controllers/freqCtrl.js');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());

//enable CORS
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });

app.get('/api/fetchfile',freqCtrl.fetchFile);
app.get('/api/wordcount',freqCtrl.wordCounter);

app.listen(app.get('port'),() => {
    
    console.log('backend listening on :' + app.get('port'));
});