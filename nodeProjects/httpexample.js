var http = require('http');

var myWebServer = http.createServer((request,response)=>{
    var currentDateTime = new Date().toISOString();
    response.writeHead(200,{'content-type':'text/html'});
    response.end(`
        <html>
            <body>
                <h1>Hello Welcome All To My Own Http Server</h1>
                <h2>Current Time is: ${currentDateTime}</h2>
            </body>
        </html>
    `);
});

myWebServer.listen(9999);
console.log('server Started');