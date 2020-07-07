var express= require('express');
var router=express.Router();
var jwt=require('jsonwebtoken');
// route
router.route('/signin').post(signin);
router.route('/signup').post(signup);
//-------------------------------------------
var userCollection = require('../model/UserData');


// function 
async function signin(req,res)
{
  try {

    const result = await userCollection.findOne({ 'username': req.body.username,'pass':req.body.pass });
    if(result!==null)
    {
      let token=jwt.sign({userID:req.body.username},"key-secret",{expiresIn:"1m"});

      res.status(200)
      res.send(token);

    }
    else
    {
      res.status(404);
      res.send(  "user doesn't exist!" );
    }

  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
  }
}
async function signup(req,res)
{
  try {

    const result = await userCollection.create({ 'username': req.body.username,'pass':req.body.pass });//
    res.status(200)
    res.json(result);

  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
  }
}
module.exports=router;
   
