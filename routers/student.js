const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    res.send('Hello Student');
});

router.post('/', (req, res)=>{
    res.send('Hello post from Student');
});



// export router module
module.exports = router;