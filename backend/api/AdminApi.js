var express = require("express");
var Admin = require("../models/AdminSchema");
var User = require("../models/userSchema");
var passport = require('passport');
var Students = require("../models/StudentsSchema");
var Coachs = require("../models/CoachsSchema");
var router = express.Router();
const bcrypt = require('bcrypt');
const salt = 10;
router.post("/changeUsername" , (req,res) => {
Admin.findOneAndUpdate({username : req.body.Oldusername},{$set:{username:req.body.Newusername}},(err,result) => {
    if(err) res.send(err)
    res.send(result)
})
}) 
router.post("/chnagePassword" , (req,res) => {
    Admin.findOneAndUpdate({username : req.body.Oldpassword},{$set:{username:req.body.Newpassword}},(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
})

router.get("/getAllStudents" , (req,res) => {
Students.find({},(err,result) => {
    if(err) res.send(err)
        res.send(result)
})
 })
 router.get("/getOneStudent" , (req,res) => {
    Students.findOne({email : req.body.email},(err,result) => {
        if(err) res.send(err)
            res.send(result)
    })
})


 router.get("/getAbsenceStudent" , (req,res) => {
    Students.findOne({email : req.body.email}).select("email absence").exec((err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
 })
 router.get("/getpaymentStudent" , (req,res) => {
    Students.findOne({email : req.body.email}).select("email payment").exec((err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
})
router.post("/addCoach" , passport.authenticate('bearer', { session: false }),(req,res) => {
let coach  = new Coachs({
   
    age :req.body.age,
    name :  req.body.name,
    salary:req.body.salary
})
coach.save((err,result) => {
    if(err) res.send(err)
    var user = new User({
        username :  req.body.username , 
        password : bcrypt.hashSync(req.body.password, salt),
        role: 'coach',
        coach: result._id
    })
    user.save( function(err2, resultat) {
        if(err2) res.send(err2)
        res.send(resultat)
    })
        
})
})
router.post("/deleteCoach" , (req,res) => {
Coachs.findByIdAndRemove(req.body.id,(err,result) => {
    if(err) res.send(err)
        res.send(result)
})
})
router.get('/getCoachs' , (req,res) => {
    Coachs.find({},(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
})











module.exports = router;