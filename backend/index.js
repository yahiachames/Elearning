var express = require("express");
var bodyParser = require("body-parser");
var db = require("./db");
var passport = require('./passport');
const StudentApi = require("./api/StudentsApi")
const UserApi = require("./api/UserApi")
const AdminApi = require("./api/AdminApi")
const CoachApi = require("./api/CoachsApi")

const cors = require("cors")
var app = express();
app.use(cors())
app.use(express.static("public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/students",StudentApi)

app.use('/user',UserApi)
app.use('/admin',AdminApi)
app.use('/coach',CoachApi )

app.listen(5000, () => {
  console.log("server is running ");
});

