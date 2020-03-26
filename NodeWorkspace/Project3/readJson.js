var http = require('http');
var fs = require('fs');

var myWebServer = http.createServer((request, response) => {
    let url = request.url;
    if("/books"==url){
        fs.readFile("./data/books.json", (err, data) => {
            if (!err) {
                response.writeHead(200, { 'content-type': 'application/json' });
                response.end(data);
            } else {
                console.log(err);
                response.writeHead(404, { 'content-type': 'application/json' });
                response.end();
            }
        });
    }else{
        if(url.startsWith("/enquiry")){
            enquiryHandler(request,response);
        }else{
            response.writeHead(404, { 'content-type': 'text/html' });
            response.end("Thank you for your query we will get back to you soon");
        }
    }
});

myWebServer.listen(9999);
console.log('book server statrted')