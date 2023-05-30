const express = require('express');
const post_route = express();

post_route.use(express.urlencoded({ extended: true }));
post_route.use(express.json());

const multer = require('multer');
const path = require('path');
const controller = require('../controllers/controller');

post_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public'), function (error, success) {
            if (error) {
                console.log(error);
            }
        });
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log(error);
            }
        });
    }
});


const upload = multer({ storage: storage });

post_route.post('/events', upload.single('file'), controller.createEvent);

// post_route.get('/events', controller.getUIDEvent);

post_route.get('/events', controller.getEvent);

post_route.put('/events/:uid', controller.updateUIDEvent);

post_route.delete('/events/:uid', controller.deleteUIDEvent);

module.exports = post_route;