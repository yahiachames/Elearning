var express = require("express");
var Students = require("../models/StudentsSchema");
var multer = require("multer")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'api')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
var upload = multer({ storage: storage }).single('file')

const nodemailer = require('nodemailer');
var router = express.Router();
let transport = nodemailer.createTransport({
    service: 'gmail',
    port: 2525,
    auth: {
       user: 'yahia.chames14@gmail.com',
       pass: "chames1234"
    }
});
const Message = (studentEmail) => {
    const message = {
        from: 'yahia.chames14@gmail.com',
        to: studentEmail,         
        subject: 'test result', 
        text: 'we will give ur test result as soon as possible' 
    }
    return message
}


router.post("/signup" , (req,res) => {
  
    var student = new Students({
      email: req.body.email,
      name : req.body.name,
      age :req.body.age,
      current_study :req.body.current_study,
      lvl_wanted : req.body.lvl_wanted,
      payment_type :req.body.payment_type ,
      payment_date : req.body.payment_date ,
      absence: req.body.absence ,
      lvl_deserved : req.body.lvl_deserved ,
    });
    student.save((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
}) 

router.post("/getCode" , (req,res) => {
Students.findOneAndUpdate({email :req.body.email} , {$set:{code:req.body.code}},(err,result) => {
  if (err) res.send(err)
    if(result) {transport.sendMail(Message(result.email));res.send("check your email")}
})
}) 
router.post("/sendCode",(req,res) => {
  Students.findOne({email : req.body.email},(err,result) => {
if(err) res.send(err)
else {
 if(result) {let Newcode = result.code
  let Email = result.email

  Students.update({email : Email},{$set:{code : Newcode.push(req.body.code)}},(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })}
  else res.send(result)
}
  })
 
})
router.post('/upload',upload,(req,res) => {
 Students.findOne({email:req.body.email},(err,result) => {
   if(err) res.send(err)
   if (result) {let Newcode = result.code
    let Email = result.email
    
    Students.update({email:Email},{$set:{code : Newcode.push(req.body.file)}},(error,resultat) => {
      if (error) res.send(error)
       if(result) {transport.sendMail(Message(result.email))
         res.send(resultat)}
    })
   }
 })
});







module.exports = router;