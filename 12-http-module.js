const http = require ('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url=='/'){
    res.end('Welcome to our home page')
    return;
    }
    if(req.url == '/about'){
        res.end('Here is our short history')
        return;
    }
     else {res.end(`
        <h1>Oops!</h1>
        <p>We Can't Seem To Find The Page You Are Looking For</p>
        <a href="/">back home</a>
        `)}
})

server.listen(5001)