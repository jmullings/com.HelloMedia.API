/**
 * Created by jlmconsulting on 26/05/2017.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var mongo = require('mongodb');
var objectId = require('mongodb').ObjectID;
var fileUpload = require('express-fileupload');
router.use(fileUpload());

//Twin Connection URL
var url = "";
var os = require('os');
if (os.hostname().indexOf("local") > -1)
    url = 'mongodb://localhost:27017/hmlogin';
else
    url = 'mongodb://jmullings:Account1972@ds027709.mlab.com:27709/hmlogin';


// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/get-data', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});

router.get('/viewUsers', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});


///Data entry points///
router.post('/insert', function (req, res, next) {
    var item = {
        first: req.body.first,
        surname: req.body.surname,
        email: req.body.email
    };
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('user-data').insertOne(item, function (err, result) {
            assert.equal(null, err);
        });
    });


    res.redirect('/');
});

router.post('/update', function (req, res, next) {
    var item = {
        first: req.body.first,
        surname: req.body.surname,
        email: req.body.email
    };
    var id = req.body.id;

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('user-data').updateOne({"_id": objectId(id)}, {$set: item}, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');
            db.close();
        });
    });



    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.photos;

    sampleFile.mv('uploads/' + id + "jpg", function (err) {
        assert.equal(null, err);

        res.send('File uploaded!');

        res.redirect('/');
    });

});

router.post('/delete', function (req, res, next) {
    var id = req.body.id;

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('user-data').deleteOne({"_id": objectId(id)}, function (err, result) {
            assert.equal(null, err);
            console.log('Item deleted');
            db.close();
        });
    });
    res.redirect('/');
});

//Image inseert via express uploader//
router.post('/insert', function (req, res, next) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    var sampleFile = req.files.photos;
    var id = null;
    var item = {
        first:   req.body.first,
        surname: req.body.surname,
        email:   req.body.email,
        photos:  res.json(req.files)
    };

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('user-data').insertOne(item, function (err, result) {
            assert.equal(null, err);
            id = result._id;
            console.log(result._id);
        });
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        res.send(id + ': File uploaded!');
        sampleFile.mv('uploads/' + id + ".jpg", function (err) {
            assert.equal(null, err);
            res.json(id);
            //res.send(id + ': File uploaded!');
            // res.redirect('/');
            db.close();
        });
    });


});

module.exports = router;