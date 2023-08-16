const http = require("http");
const filesystem = require("fs");
const app = http.createServer();

const readfile = (filepath, response) => {
  console.log(filepath);
  if (filesystem.existsSync(filepath)) {
    filesystem.readFile(filepath, (error, data) => {
      if (error) {
        console.log("the error is " + error);
      } else {
        response.end(data);
      }
    });
  } else {
    console.log("filepath not found");
  }
};

app.on("request", (request, response) => {
  if (request.url == "/") {
    request.url = "/index.html";
  } else if (request.url == "/favicon") {
    request.url = "/favicon.ico";
  }
  let requesturl = request.url;
  console.log(requesturl);
  if (requesturl.indexOf(".html") !== -1) {
    response.writeHead(200, { "Content-Type": "text/html" });
    readfile(`./pages${requesturl}`, response);
  } else if (requesturl.indexOf(".css") !== -1) {
    console.log("the request came to the block" + requesturl + response);
    response.writeHead(200, { "Content-Type": "text/css" });
    readfile(`.${requesturl}`, response);
  } else if (requesturl.indexOf(".js") !== -1) {
    response.writeHead(200, { "Content-Type": "text/javascript" });
    readfile(`.${requesturl}`, response);
  } else if (requesturl.indexOf(".ico") !== -1) {
    response.writeHead(200, { "Content-Type": "text/ico" });
    readfile(`./pages${requesturl}`, response);
  } else {
    console.log("check your code");
  }
});

app.listen(3000);
