const express = require('express');
const router = express.Router();

// another way to give bigger path is defining the route as bellows

router.route('/')
.get((req, res)=>{
    res.send(req.id);
})
.post((req, res)=>{
    res.send({'msg': 'Hello Post'});
});

// // create GET requests
// router.get('/', (req, res)=>{
//     res.send(req.id);
// });


// // create POST requests
// router.post('/', (req, res)=>{
//     res.send({'msg': 'Hello Post'});
// })


// export router module
module.exports = router;