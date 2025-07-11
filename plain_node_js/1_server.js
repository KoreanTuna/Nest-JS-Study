const http = require("http");
const url = require("url");

/// 127.0.0.1 -> loop back
const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Home Page</h1>");
  } else if (path === "/post") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Post Page</h1>");
  } else if (path === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}/`);
});
