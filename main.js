const http=require('http');
const app=http.createServer();
const router=require('./routes');
const fileread=require('./fileread');
const cntntype=require('./contenttypes');



app.on('request', (request, response) => {
  // You can call your handle function here to route the request

let rqstdurl=request.url;

router.get(rqstdurl,(request,response)=>{
  console.log("the log in router.get"+request.url)
  response.writeHead(200,cntntype.html);
  fileread.getfile(`/pages/${rqstdurl}`,response)
})

router.handle(request, response);
  

});

app.listen(5000);
