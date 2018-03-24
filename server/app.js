require('./api/data/db.js');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

let freqCtrl = require('./api/controllers/freqCtrl.js');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.get('/fetchfile',freqCtrl.fetchFile);
app.get('/wordcount',freqCtrl.wordCounter);

app.listen(app.get('port'),() => {
    
    console.log('backend listening on :' + app.get('port'));
});