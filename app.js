const express = require('express');
const app = express();
const user = require('./routers/users');
const student = require('./routers/student');

// port is use to identify the applications seperately. 
// one application has one port.

app.use('/api/users', user);
app.use('/api/student', student);


// not always the app will able to get the PORT:3000
// get PORT from the environment
console.log(process.env.PORT);
// or else get 3000 as the port

const port = process.env.PORT || 3000;

// app will take the given port and show what port it took on console.
app.listen(port, ()=>console.log(`App is running on port ${port}`));


// developer needs to give the status code when developing API. 