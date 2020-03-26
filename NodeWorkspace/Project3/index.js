var http = require('http');
var fs = require('fs');


var myWebServer = http.createServer((request, response) => {
    let url = request.url;
    if("/"==url || url.endsWith(".htm") || url.endsWith(".html") || url.endsWith(".css")){
        staticUrlHandler(request,response);
    }else{
        if(url.startsWith("/enquiry")){
            enquiryHandler(request,response);
        }else{
            response.writeHead(404, { 'content-type': 'text/html' });
            response.end();
        }
    }
});

const enquiryHandler = (request,response)=>{
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end("Thank you for your query we will get back to you soon");
}

const staticUrlHandler = (request,response)=>{
    let url = request.url;
    let fileName = "./public";
    if ("/" == url) {
        fileName = `${fileName}/index.htm`;
    } else {
        fileName = `${fileName}${url}`; 
    }
    if (fileName.length > 0) {
        fs.readFile(fileName, (err, data) => {
            if (!err) {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.end(data);
            } else {
                console.log(err);
                response.writeHead(404, { 'content-type': 'text/html' });
                response.end();
            }
        });
    }
}

myWebServer.listen(9999);
