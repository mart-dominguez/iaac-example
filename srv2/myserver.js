const express = require("express");
const bodyParser = require('body-parser');
const http = require('http');
const puerto = 8080;
const version = 101;
const https = require('https')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const options = {
  hostname: 'back01',
  port: 8080,
  path: '/api/hello',
  method: 'GET'
}

const myGet =()=> {
    return new Promise((resolve, reject) => {
        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
            res.on('data', d => {
              // process.stdout.write(d);
              console.log(d);
              resolve(d);
            })
          });          
          req.on('error', error => {
            console.error(error);
          }) ;         
          req.end();
    })
}

app.all('*', (req,resp) =>{
    console.log(req.headers);
    console.log(req.body);
    myGet().then((data1)=>{
        console.log(data1);
        resp.send('[****]Saludos desde express' + data1);      
    })
});

app.get('/version', function (req, res) {
 const rpta = 'version: '+version;
 res.send(rpta);
});

app.listen(puerto, () => {
console.log("El servidor está inicializado en el puerto "+puerto);
});