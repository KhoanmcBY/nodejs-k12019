var fs= require('fs');
const { resolve } = require('path');
// const { resolve } = require('path');
// let pr= new Promise((resolve,reject)=>{

//     //resolve("xu lys thanh cong");
//     reject("co loi");
// });
// pr.then((data)=>console.log(data),
// (err)=>console.log(err));

let read=(filename)=>{

    return new Promise((resolve,reject)=>{

        fs.readFile(filename,'utf8',(err,data)=>{

            if(err)
            reject(err);
            else
            resolve(data);
        })
    });
}
// read("./data/data.json").then((data)=>{
    
//     console.log(data);
// },(err)=>{
//     console.log(err);
// });

//let res=await fs.promises;
let promiseWait= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("chay xong roi");
    },2000);
});
let checktime= async ()=>{

    let res=await promiseWait;
    console.log(res);
};

checktime();