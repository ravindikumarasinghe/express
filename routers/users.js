const express = require('express');
const router = express.Router();




// create GET requests
router.get('/', (req, res)=>{
    res.send({'msg':'Hello Get'});
});


// create POST requests
router.post('/', (req, res)=>{
    res.send({'msg': 'Hello Post'});
})


// export router module
module.exports = router;