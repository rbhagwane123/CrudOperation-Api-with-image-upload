const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')

app.use(cors({
    origin: '*'
}));

mongoose.connect("mongodb://127.0.0.1:27017/event_crud");

const post_route = require('./routes/routes');
app.use('/api/v3/app', post_route);

app.listen(8000, function(){
    console.log('Server started');
})