const http=require('http')
const app=http.createServer();

app.on("request",(request,response)=>{
    response.writeHead((200),{"Content-Type":"text/html"});
    console.log("response is made"+request.url)
    response.write("<h1>The server responds correctly</h1>");
    response.end();
})

app.listen(3000);