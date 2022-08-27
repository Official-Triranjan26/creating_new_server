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
                    // console.error(chunk);
                })
                .on("end",()=>{
                    body=JSON.parse(body);
                    let newList=toDoList;
                    newList=toDoList.push(body.item);
                    console.log(newList);
                    res.writeHead(204);
                    

                    // console.log("data :",body);
                })
        }
        else if(method==="DELETE"){
            let body="";
            req
                .on("error", (err) => {
                    console.error(err);
                })
                .on("data",(chunk)=>{
                    body=body+chunk;
                })
                .on("end",()=>{
                    body=JSON.parse(body);

                    let deleteItem=body.item;
                    // toDoList.find((element,index)=>{
                    //     if(element===deleteItem){
                    //         toDoList.splice(index, 1);
                    //     }
                    // });
                    for (let i = 0; i < toDoList.length; i++) {
                      if (toDoList[i] === deleteItem) {
                        toDoList.splice(i, 1);
                        break;
                      }
                    }
                })
                res.writeHead(204);
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
    });// http://localhost:8081