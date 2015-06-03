var Package = require('../models/package');
var express = require('express');

//configure routes
var router = express.Router();

router.route('/osx/packages')
    .get(function(req, res){
       Package.find(function(err, packages){
           if(err)
                res.send(err);
           res.json(packages);
       });
    })

router.route('/osx/package/:id/')
    .get(function(req, res){
        Package.findOne({ _id: req.params.id }, function(err, package) {
            if(err)
                res.render('error', {error: err});
            res.render('osx/package', {package: package});
        });
    })

module.exports = router;
