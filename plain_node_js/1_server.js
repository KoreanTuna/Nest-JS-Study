const http = require("http");

/// 127.0.0.1 -> loop back
const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}/`);
});
