const mongoose = require("mongoose")
const CoachsSchema = new mongoose.Schema({
    name:{type : String , required : true },
    age  : {type : String , required : true },
    salary :{type : String , required : true },
    students : [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }]
})
module.exports = mongoose.model("coachs", CoachsSchema);