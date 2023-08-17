routes={
    "GET":{
    },
    "POST":{
    }
}

exports.handle=(Request,Response)=>{
    try{
        console.log(Request.method,Request.url)
        if(routes[Request.method][Request.url]){
            console.log("where the handle occurs");
            routes[Request.method][Request.url](Request,Response);
        }
        else{
            console.log("error in handle");
        }
    }
    catch(error){
         console.log(error);
    }
}

exports.get=(URL,action)=>{
    console.log("checkpoint")
    routes["GET"][URL]=action;
}