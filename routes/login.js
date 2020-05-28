var express = require('express');
var fs = require('fs');
var path = require('path');
var cors = require('cors');
var filePath = path.join(__dirname, '../static/fakeUsers.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile(filePath, 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return
    }
    console.log('File data:', jsonString);
    res.send(jsonString);
  })
});


router.post('/', cors(), function(req, res) {
  const { userName, password } = req.body;

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    const users = JSON.parse(data);
    const founded = users.find(user => user.userName === userName);

    console.log(users, founded);

    if (founded && founded.password === password) {
      res.json({ data: { userName: userName }, status: "successful" });
    } else {
      res.json({ data: "User is not founded", status: "failed" });
    }

  });


});

module.exports = router;
