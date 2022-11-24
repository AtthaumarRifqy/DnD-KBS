const http = require('http');
const StringDecoder = require('string_decoder').StringDecoder;

const engine = require('./engine.js');
let rules = require("./rules/dnd-kbs-rules.json");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let buffer = "";
  let decoder = new StringDecoder('utf-8');

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  req.on('data', (chunk) => {
    buffer += decoder.write(chunk);
  }).on('end', () => {
    buffer += decoder.end();
    console.log(buffer);
    let result = engine.processEngine(JSON.parse(buffer), rules.decisions);

    res.json(result);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});