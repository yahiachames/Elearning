

    const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username : {type : String , required : true },
    password : {type : String , required : true },
    role: {type: String, enum:['admin', 'coach']},
    admin:{ type: mongoose.Schema.Types.ObjectId, ref: "admin" },
    coach:{ type: mongoose.Schema.Types.ObjectId, ref: "coachs" }
})
module.exports = mongoose.model("user", UserSchema);