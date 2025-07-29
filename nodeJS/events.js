const EventEmitter = require('events');

const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
        
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale',(name) =>{
    console.log(`Hi ${name}, new sale is made`);
})

myEmitter.on('newSale',(name) =>{
    console.log(`Customer name: ${name}`);
})

myEmitter.emit('newSale','Prem');



const server = http.createServer();

server.on("open", (name) => {
    console.log('Server is open',name);     // goes to event loop-1 
});

console.log('hello top level code 1');
server.on("request", (req, res) => {
    console.log('Request received'); // goes to event loop-2
    console.log(req.url);
    res.end('Request received');
});

console.log('hello top level code 2');

server.on("request", (req, res) => {
    console.log('Another request received'); // goes to event loop-3
});

console.log('hello top level code 3');
server.on("close", () => {
    console.log('Server closed'); // goes to event loop-4
});

console.log('hello top level code 4');


server.emit('open','prem'); // Emit the 'open' event to trigger the first listener

console.log('hello top level code 5');
server.listen(8000,() => {
    console.log('Waiting for requests...');     
});