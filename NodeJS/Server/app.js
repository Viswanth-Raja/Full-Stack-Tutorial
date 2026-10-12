// ! Creating and establishing Server

/* 
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

console.log("Port 3000");
server.listen(3000, "127.0.0.1");
 */

// ! Stream

/* const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/readme.txt");
const writeStream = fs.createWriteStream(__dirname + "/write.txt");

readStream.on("data", (chunk) => {
  console.log("Data Received:");
  console.log(chunk);
  writeStream.write(chunk);
}); */

// ! Pipes

/* const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/readme.txt");
const writeStream = fs.createWriteStream(__dirname + "/write.txt");

readStream.pipe(writeStream); */

// ! Pipes used in Server

/* const http = require("http");
const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/readme.txt");

const Server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  readStream.pipe(res);
});

Server.listen(3000, "127.0.0.1"); */

// ! Serving HTML

/* const http = require("http");
const fs = require("fs");
const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");

const Server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  readStream.pipe(res);
});

Server.listen(3000, "127.0.0.1"); */

// ! Serving JSON

/* const http = require("http");
const fs = require("fs");

const Server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const person = {
    name: "alex",
    email: "alex@email.com",
    job: "designer",
  };

  // end() strictly gets only string or buffer
  res.end(JSON.stringify(person));
});

Server.listen(3000, "127.0.0.1"); */

// ! Routing

const http = require("http");
const fs = require("fs");

const Server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/about.html").pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

Server.listen(3000, "127.0.0.1");
