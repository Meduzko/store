var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('data');
});



// create a GET route
router.get('/users', (req, res) => {
    const uri = 'mongodb+srv://mdz:123@cluster0-urkyl.mongodb.net/test?retryWrites=true&w=majority';
    MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        console.log('Fetching data');

        const collection = client.db('sample_mflix').collection('movies');
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, results) => {
            if (err) {
                console.log(err);
            }
          //  console.log(results);
            res.send(results);
            client.close();
        });

    });

});

module.exports = router;