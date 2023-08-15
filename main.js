const http = require("http");
const fileread = require("fs");
const app = http.createServer();

const passingurl = (pssurl) => {
  if (pssurl === "/") {
    return("./pages/index.html");
  } 
  else if(pssurl==='/favicon.ico'){
    return "./pages/favicon.ico";
  }
  else {
    return(`./pages/${pssurl}.html`);
  }
};

app.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  console.log(request.url);
  request.url = request.url.endsWith(".ico")
    ? (request.url = "/favicon.ico")
    : (request.url = request.url);
  console.log(request.url);
  let goturl = passingurl(request.url);
  if (goturl) {
    fileread.readFile(goturl, (error, data) => {
      if (error) {
        console.log("there is error reading in file", error);
      } else {
        response.write(data);
        response.end();
      }
    });
  } else {
    console.log("something error in code");
  }
});

app.listen(3000);
