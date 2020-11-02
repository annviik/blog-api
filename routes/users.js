const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get((req,res) => {
User.find()
.then(users => res.json (users))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const Aname = req.body.Aname;

    const newUser = new User({
        title,
        description,
        Aname,
    });
 newUser.save()
 .then(()=> res.json('User Added!'))
 .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;