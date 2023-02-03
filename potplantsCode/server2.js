const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
});
const fs = require('fs');
const path = require('path');

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let filePath = path.join(__dirname, 'index.html');
    let readStream = fs.createReadStream("/home/cpe124-g1/potplants/finalCode/index.html");
    readStream.pipe(res);
});
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
