var express = require('express');
var router = express.Router();
var productsPlaceholder = require('../public/placeholderJSON/products');


router.get('/', function(req, res, next) {


    res.send(productsPlaceholder);
});


// create a GET route
// router.get('/products', (req, res) => {
//     res.send(productsPlaceholder);
// });

module.exports = router;