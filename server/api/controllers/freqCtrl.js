const http = require('http');
const mongoose = require('mongoose');

const File = mongoose.model('File');

module.exports.wordCounter = function(req,res){

    const N = parseInt(req.query.count);
    if(N <= 0 || !Number.isInteger(N)){
        res
            .status(400)
            .json("Input must be a number greater than zero")
    }else{
        File
            .find({},{"data" : true, "_id" : false})
            .limit(1) //there is one file only though
            .exec((err,doc) => {
                if(err){
                    console.log("error fetching file from database");
                    res
                        .status(404)
                        .json("error fetching file from database");
                }else{
                    let topN = getFrequencies(doc[0].data,N);
                    res
                        .status(200)
                        .json(topN);
                }
            });
    }
}

let getFrequencies = function(doc,N){

    let docSanitized = doc.replace("’","'").replace(/[^a-z0-9']/gi,' ').toUpperCase(); //anything that is not alphanumeric or ' is replaced with a space
    let docArray = docSanitized.split(' ').filter((elem) => {
        if(elem !== '')
            return elem;
    });

    let hash = {}; // { "word1" : freq1, "word2" : freq2}

    for(let i = 0; i < docArray.length; i++){
            
            if(hash.hasOwnProperty(docArray[i])){ //if already exists increment counter
                hash[docArray[i]]++;
            }else{ 
                                             //else add word as new property and set its value to zero
                hash[docArray[i]] = 0;
            }
    }

    //convert object into array of {word : freq} objects
    let frequencyArray = [];
    for(let word in hash){
        frequencyArray.push([word,hash[word]]); 
    }
    //sort this array on frequencies
    frequencyArray.sort((a,b) => b[1] - a[1]);

    //converting array of arrays into array of objects { "word" : freq } for easy json parsing
    if (N > frequencyArray.length) {
        N = frequencyArray.length; //keep it within bounds
    }
    let topN = [];
    for(let i = 0; i < N; i++){
        topN.push({ [frequencyArray[i][0]] : frequencyArray[i][1] });
    }
    console.log(topN);
    return(topN);

}

module.exports.fetchFile = function(req,res){
    console.log('requset came');
    let fileURL = 'http://terriblytinytales.com/test.txt';
        
    http.get(fileURL,(resp) => { 
        let data = '';               
        resp.on('data',(chunk) => {
            data += chunk;
        });

        resp.on('end',() => {
            // console.log(data);
            File
                .remove({},() => {
                    console.log("delted successfuly"); //remove previous version, only one file stored on db at a time
                });
                
            File
                .create({
                    data : data
                },(err,doc) => {
                    if(err){
                        console.log("Error inserting file in database");
                        res
                            .status(400)
                            .json(err);
                    }else{
                        res
                            .status(201)
                            .json();
                    }
                });
        });
    });
}
