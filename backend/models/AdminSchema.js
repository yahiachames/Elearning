const mongoose = require("mongoose")
const AdminSchema = new mongoose.Schema({
    coachs : [{ type: mongoose.Schema.Types.ObjectId, ref: "coachs" }],
    students : [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }]
})
module.exports = mongoose.model("admin", AdminSchema);