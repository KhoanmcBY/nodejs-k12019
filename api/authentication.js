var fs=require('fs');
var express= require('express');
var router=express.Router();
// route
router.route('/signin').post(signin);
// function 
function signin(req,res)
{
    var data=fs.readFile('./data/data.json','utf8',(err,data)=>{

        if(err!==null)
        {

        }else
        {
            let objectData=JSON.parse(data);
            
            let e = objectData.find(element => element.user===req.body.user);
            if(e!==undefined)
             {
                if(e.pass===req.body.pass)
                {
                    res.sendStatus(200);
                }
                else
                {
                    res.send("pass fail");
                }
             }
             else
             {
                res.send("user not found");

             }
          
        }
    });
}
module.exports=router;