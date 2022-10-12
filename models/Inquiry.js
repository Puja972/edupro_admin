var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true},
        mobileno:{type:String,require:true},
        message:{type:String,require:true},
        status:{type:String,require:true},
        // timestamp:{type:String,require:true}
    }
);
var Inquiry= mongoose.model("inquiries",schema);

module.exports=Inquiry;
