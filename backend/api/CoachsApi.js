var express = require("express");

var Students = require("../models/StudentsSchema");
var router = express.Router();


router.get("/getAllStudent" , (req,res) => {
    Students.find({},(err,result) => {
        if(err) res.send(err)
            res.send(result)
    })
})
router.get("/getoneStudent" , (req,res) => {
    Students.findOne({email : req.body.email},(err,result) => {
        if(err) res.send(err)
            res.send(result)
    })
})
router.get("/getdegreeStudent" , (req,res) => {
    Students.findOne({email : req.body.email}).select("lvl_wanted lvl_deserved").exec((err,result) => {
        if(err) res.send(err)
            res.send(result)
    })
})

router.post("/addStudentToLVL" , (req,res) => {
    Students.findByIdAndUpdate (req.body.id,{$set:{lvl_deserved:req.body.lvl}},(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
})
router.post("/deleteStudentFromLVL" , (req,res) => {
    Students.findByIdAndUpdate (req.body.id,{$set:{lvl_deserved:req.body.lvl}},(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
})







module.exports = router;