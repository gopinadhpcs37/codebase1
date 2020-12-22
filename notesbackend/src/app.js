const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/users');
const noteRoutes = require('./api/routes/notes');


mongoose.connect('mongodb://localhost:27017/Notes-api', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true } );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Successful!");
});

app.use(cors()) 
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization", "*"
    );

    if(req.method ==='OPTIONS'){
    res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, PATCH, DELETE')
    return res.status(200).json({});
}
next();
});

app.use('/users', userRoutes);
app.use('/notes', noteRoutes);


app.use((req, res, next)=>{
    const error = new Error('Not found anything');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })
})



module.exports = app;
