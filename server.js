const http = require('http');
const port=8081;

http
    .createServer((req, res)=> {//callback function ,the function means now it is capable of taking requests and sending sesponses 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Server is listening on port 8081</h1>")
    res.end();
    })
    .listen(port,()=>{//callback function
        console.log(`Nodejs server is stsrted on port ${port}`);
    });