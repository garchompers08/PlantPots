var http = require("http");
var fs = require("fs");

http.createServer(function (request, response)
{
  fs.readFile('./index.html', 'ascii', function(err, html_string)
  {
    if (err)
    {
      response.writeHead(500);
      response.end("<h1>Error 500</h1>");
    }
    else
    {
      
      response.writeHead(200, {'Content-Type': 'text/html'});
      
    }
  });
}).listen(8081);
console.log("Server running on port 8081");
