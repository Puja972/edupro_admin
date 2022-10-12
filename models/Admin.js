var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
    
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
    

    
});


var Admin = mongoose.model("admins", schema);
module.exports =Admin;