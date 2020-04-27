const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");



// var Schema = mongoose.Schema;
// var userScheme = new Schema({ name: { type: String }, avatarUrl: String }, { collection: 'Users' });
// var Users = mongoose.model('Users', userScheme);
//
// mongoose.connection.on('open', function() {
//     console.log('mongodb is connected!!');
// });

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/users', (req, res) => {
    Users.find({}, function(err, users) {
        if (err) {
            return console.log(err);
        }
        res.json({users: users});
    });
});

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});