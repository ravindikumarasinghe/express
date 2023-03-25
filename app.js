const express = require('express');
const app = express();

// port is use to identify the applications seperately. 
// one application has one port.

app.get('/api/users', (req, res)=>{
    res.send({'msg':'Hello Get'});
});

app.post('/api/users', (req, res)=>{
    res.send({'msg': 'Hello Post'});
});

app.get('/api/student', (req,res)=>{
    res.send('Hello Student');
});

app.post('/api/student', (req, res)=>{
    res.send('Hello post from Student');
});

// not always the app will able to get the PORT:3000
// get PORT from the environment
console.log(process.env.PORT);
// or else get 3000 as the port

const port = process.env.PORT || 3000;

// app will take the given port and show what port it took on console.
app.listen(port, ()=>console.log(`App is running on port ${port}`));


// developer needs to give the status code when developing API. 