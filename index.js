var express= require("express");
var app=express();
var jwt=require('jsonwebtoken');
var bodyParser=require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

// var mongoose = require('mongoose');
// mongoose.Promise=global.Promise;
// let option={useUnifiedTopology: true,useNewUrlParser: true};
// let url='mongodb://127.0.0.1:27017/byk12019';
// mongoose.connect(url,option );

//     var db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
    
//     });

var authen=require('./api/authen');
app.use('/authen',authen);

//app.use(MiddlewareTest);

var info=require('./api/info');
app.use('/info',info);



var server=app.listen(1337,()=>{
console.log("SERVER START.");
});
function MiddlewareTest(req,res,next)
{
    let token=req.headers["acesstoken"];
    if(token)
    {
        jwt.verify(token,"key-secret",(err,decode)=>{
        if(err)
        {
            res.status(401).send("Access denied");
        }
        else
        {
            req.username=decode.userID;
            next();
        }
        });
    }
    else
    {
        res.status(401).send("Access denied");
    }
 
}

/*
mongoose.connect(url,option ).then(()=>{
    console.log("Ket noi thanh cong");
    },()=>
    {
        console.log("Ket noi fail");
    });

var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
      console.log("Ket noi thanh cong");
    });*/