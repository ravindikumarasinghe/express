const express = require('express');
const app = express();
const morgan = require('morgan');
const user = require('./routers/users');
const student = require('./routers/student');

// port is use to identify the applications seperately. 
// one application has one port.

// app.use(log);               // use middleweare
// can use middleware any number of times
app.use(morgan('tiny'));
app.use('/api/users', user);
app.use('/api/student', student);



// create a middleware
// create a function
function log(req, res, next){
    console.log('Hello World');         // when request is given print 'Hello world' in console
    req.id = '10';
    next();
}


// // not always the app will able to get the PORT:3000
// // get PORT from the environment
// console.log(process.env.PORT);
// // or else get 3000 as the port


morgan('tiny');

const port = process.env.PORT || 3000;

// app will take the given port and show what port it took on console.
app.listen(port, ()=>console.log(`App is running on port ${port}`));


// developer needs to give the status code when developing API. 