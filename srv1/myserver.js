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

const myGet = () => {
  return new Promise((resolve, reject) => {
    console.log(`Crea llamada: ${options}`);
    const req = http.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)
      res.on('data', d => {
        // process.stdout.write(d);
        console.log(d);
        resolve(d);
      })
    });
    req.on('error', error => {
      console.log("ERRROROROROORR on error");
      console.error(error);
      reject(error);
    });
    console.log("INI REQUEST GENERADO");
    console.log(req);
    console.log("END REQUEST GENERADO");
    req.end();
  })
}

app.all('*', (req, resp) => {
  console.log("recibo peticion - headers");
  console.log(req.headers);
  myGet()
    .then((data1) => {
      console.log("recibo respuesta post backend - headers");
      console.log(data1);
      resp.send('[****]Saludos desde express SERVER 1 ' + data1);
    }).catch((error) => {
        console.log(error);
      }
    )
});

app.get('/version', function (req, res) {
  const rpta = 'version: ' + version;
  res.send(rpta);
});

app.listen(puerto, () => {
  console.log("El servidor está inicializado en el puerto " + puerto);
});