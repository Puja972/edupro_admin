var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(express.json());
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}));

mongoose.connect("mongodb://localhost:27017/eduprodb")
var db=mongoose.connection;
db.on('error',(err)=>{
  console.log(err);
});
db.on('open',()=>{
    console.log("Connection success");
});

app.get('/',(req,res)=>{
    res.send("Welcome");
});
app.use('/admin/admin',require("./routes/admin"));
app.use('/admin/inquiry',require("./routes/inquiry"));
app.listen(8081,()=>{
    console.log("Server is running...");
});

