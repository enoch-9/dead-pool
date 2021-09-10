const http = require('http')
const port = process.env.PORT || 3000
const fs = require('fs')

const server = http.createServer(function(req, res ) {
  res.writeHead(200, {'Content-Type': 'text/html,css'});
    fs.readFile('./blog.html', null , function(error, data){
      if (error){
        res.writeHead(404);
        res.write('file not found');
      } else{
        res.write(data);
      }
      res.end();
    });
})
 

server.listen(port, function(error) {
   if(error) {
     console.log('Something went wrong', error)
   }
  console.log('server is listening on port ' + port)
})