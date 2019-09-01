const mongoose = require("mongoose")
require("mongoose-type-email");
const StudentsSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true },
   name : {type : String , required : true },
   age :{type : Number , required : true },
   current_study : {type : String , required : true },
   lvl_wanted : {type : String , required : true },
   payment_type :{type : String , required : true },
   payment_date : {type : String , required : true },
   absence:{type : String  },
   lvl_deserved : {type : String  },
code : {type:Array}

})
module.exports = mongoose.model("students", StudentsSchema);