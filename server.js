const http = require('http');
const port=8081;
const toDoList=["React","Angular"];
http
    .createServer((req, res)=> {//callback function ,the function means now it is capable of taking requests and sending sesponses 
    const {method,url}=req;
    // console.log(method,url);
    if(url=="/todos"){
        if(method=="GET"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(toDoList.toString());
        }
        else if(method=="POST"){
            let body="";
            req
                .on("error",(err)=>{
                    console.log(err);
                })
                .on("data",(chunk)=>{
                    body=body+chunk;
                    console.error(chunk);
                })
                .on("end",()=>{
                    body=JSON.parse(body);
                    console.log("data :",body);
                })
        }
        else{
            res.writeHead(501);
        }
    }
    else{
        res.writeHead(404);
    }
    res.end();
    })
    .listen(port,()=>{//callback function
        console.log(`Nodejs server is stsrted on port ${port}`);
    });