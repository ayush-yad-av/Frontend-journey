const http = require('http');
 const fs = require('fs');

const queryString=require('querystring');

http.createServer((req,res)=>{
    if (req.url== '/') {
     fs.readFile("./payment form.html",'utf-8',(err,data)=>{
        if(err){
          res.writeHead(500,{"content-type":"text/plain" })
          res.end('internal server error 500')
          return false
      }
      res.writeHead(200,{"Content-type":"text/html"})
        res.write(data);
       res.end();

     });
    }else  if (req.url== '/payment.css') {
     fs.readFile("./payment.css",'utf-8',(err,data)=>{
        if(err){
          res.writeHead(500,{"content-type":"text/plain" })
          res.end('CSS not found');
          return ;
      }
      res.writeHead(200,{"Content-type":"text/css"})
        res.write(data);
       res.end();

     });
    }else if(req.url== '/submit'){
      const databody=[];
      let readableData;
      req.on('data',(chunk)=>{
       databody.push(chunk);
      })
      req.on('end',()=>{
        let rawData=Buffer.concat(databody).toString();
        readableData= queryString.parse(rawData);
        res.writeHead(200,{'Content-type':'application/json'});
        res.write(JSON.stringify(readableData));
        res.end()
      })
      
    }
}).listen(3000);