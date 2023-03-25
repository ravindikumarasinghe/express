const express = require('express');
const router = express.Router();
const user = require('./routers/user');

app.use('/api/users', user);

router.get('/', (req, res)=>{
    res.send({'msg':'Hello Get'});
});

router.post('/', (req, res)=>{
    res.send({'msg': 'Hello Post'});
})


// export router module
module.exports = router;