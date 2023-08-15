const http=require('http')
const app=http.createServer();

const requesturl={
    '/contactus':'<h1>This is the contact page</h1>',
}



app.on("request",(request,response)=>{
    var body=[];
    request.on("data",(datin)=>{
            body.push(datin);
    })
    request.on("end",()=>{
        body=Buffer.concat(body).toString();
        console.log(body);
        console.log(request.url);
        console.log(request.method)
    })
    response.writeHead((200),{"Content-Type":"text/html"});
   
    if(requesturl[request.url]){
        setTimeout(()=>{response.end(requesturl[request.url])},5000);
        console.log(request.url);
    }
    else{
        setTimeout(()=>{response.end("<h1>The server responds correctly</h1>")},5000);
    }
})

app.listen(3000);