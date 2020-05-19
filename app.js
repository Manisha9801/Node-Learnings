const http = require('http');
const fs = require('fs');

//create server call back function
const server = http.createServer((req,res) => {
    // console.log('1',req.url,'2', req.headers,'3', req.method);
    // process.exit();
    const url = req.url;
    const method = req.method; 
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"/><button type="submit">SUBMIT</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data',(chunk) => {
            body.push() ;
        });
        fs.writeFileSync('message.txt', 'DUMMY TEXT');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my first Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);