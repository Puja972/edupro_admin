var Inquiry=require("../models/Inquiry");
var express = require("express");
var router = express.Router();

router.put('/',(req,res)=>{
        var body=req.body;
        var inquiry = new Inquiry();
        inquiry.name=body.name;
        inquiry.email=body.email;
        inquiry.mobileno=body.monileno;
        inquiry.message=body.message;
        inquiry.status=body.status;
        inquiry.save().then((result)=>{
            res.end(JSON.stringify({status:"success",data:result}));
        },(error)=>{
            res.end(JSON.stringify({status:"failed",data:error}));
            console.log(error);
        });
});
router.get('/:id',async(req,res)=>{
    let data=await Inquiry.findById(req.params.id);
    res.end(JSON.stringify({status:"success",data:data}));    
});
router.get('/',async(req,res)=>{
    let data = await Inquiry.find();
    res.end(JSON.stringify({status:"success",data:data})); 
});
router.post('/',async(req,res)=>{
    var body = req.body;
    let inquiry = await Inquiry.findById(body.id);
       inquiry.name=body.name;
        inquiry.email=body.email;
        inquiry.mobileno=body.monileno;
        inquiry.message=body.message;
        inquiry.status=body.status;
    inquiry.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(error)=>{
        res.end(JSON.stringify({status:"failed",data:error}));
    });
});


module.exports=router;