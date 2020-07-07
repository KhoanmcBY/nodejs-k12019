var express= require('express');
var router=express.Router();

//router.use(MiddlewareTest);
router.get('/getinfo',(req,res)=>{
    res.send("uuid get: ");
});
router.post('/getinfo',(req,res)=>{
    res.send("uuid: post "+req.body.id);
   // res.status(200).send("uuid: post ");
});
function MiddlewareTest(req,res,next)
{
    console.log("Time:",new Date())
    next();
}
module.exports=router;