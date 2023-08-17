const { error } = require('console');
const filesystem=require('fs');

module.exports={
    getfile:(filepath,response)=>{
        filesystem.readFile(`./${filepath}`,(error,data)=>{
              if(data){
                response.end(data)
              }
              else{
                console.log(error)
              }
        })
    }
}