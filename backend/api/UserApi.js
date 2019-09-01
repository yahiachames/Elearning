
var express = require("express");
const bcrypt = require("bcrypt")
var router = express.Router();
const User = require('../models/userSchema')
var jwt = require('jsonwebtoken');
let saltRounds = 10


router.post("/login" ,(req,res) => {
    User.findOne({ username: req.body.username }, (err, result) => {
        if (err) res.send(err);
        else if(result) {
            let hash = result.password;
          if (!result.username ||   bcrypt.compareSync(req.body.password, hash) == false  ) {
            
    
           
              res.send("invalid email or password");
            
          } else {
            let token = jwt.sign({ data:  result}, 'secret', { expiresIn: '1h' });
            
          res.json({token})
          }
        }
      });
} )

router.post("/signup" , (req,res) => {
  let user  = new User ({
    username : req.body.username,
    password : bcrypt.hashSync(req.body.password, saltRounds),
    role : "coach"


  })
  user.save((err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
})








module.exports = router;
