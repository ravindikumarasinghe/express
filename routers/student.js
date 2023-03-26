const express = require('express');
const router = express.Router();



router.get('/api/student', (req,res)=>{
    res.send('Hello Student');
});

router.post('/api/student', (req, res)=>{
    res.send('Hello post from Student');
});



// export router module
module.exports = router;