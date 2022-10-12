var express = require("express");
var Admin= require("../models/Admin");
var router = express.Router();

router.post("/", (req, res) => {
    var body = req.body;
   
    let admin = new Admin();
    admin.name=body.name;
    admin.email=body.email;
    admin.password=body.password;
    admin.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    },
        (error) => {
            res.end(JSON.stringify({ status: "Failed",data:error }))
        })
});



module.exports = router;