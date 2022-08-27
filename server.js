const express = require('express');

//initilization
const app=express(); 
app.use(express.json());//application will use json for data transfar

const port=8081;
const toDoList=["React","Angular","Express"];

app.get("/todos",(req,res)=>{
    // res.send(200,{"Content-Type":"text/html"});
    // res.type('text/html');
    res.status(200).send(toDoList);
})

app.post("/todos",(req,res)=>{
    let newToDoItem=req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        // message :"Task added successfully ",
        message : `Updated list ${toDoList}`
    });
});

app.delete("/todos",(req,res)=>{
    let itemToDelete=req.body.item;
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i] === itemToDelete) {
          toDoList.splice(i, 1);
          res.status(202).send({
            message: `Deleted item - ${req.body.item}`
            })
            break;
        };
      }
    res.send({
        message: "Item not found !!"
    });

    // toDoList.find((element,index)=>{
    //     if(element===itemToDelete){
    //         toDoList.splice(index, 1);
    //         res.status(202).send({
    //             message: `Deleted item - ${req.body.item}`
    //           });
    //     }
    //     else{
    //         res.sendStatus(202).send({
    //             message: "Item not found !!"
    //           });
    //     }
    // });
    
});

// put, patch // all the other methods on a particular route
app.all("/todos", (req, res) => {
    res.status(501).send({
        message :"fetal error !!"
    });
  });
  
  // all the other routers
  app.all("*", (req, res) => {
    res.status(404).send();
  });

app.listen(port,()=>{
    console.log(`Node js server started on port ${port}`);
})
// I have tuned the code a little bit,the original code link is below-->
// https://github.com/aditya12gusain/creating-first-servere-10567/blob/todo-server-express/server.js
