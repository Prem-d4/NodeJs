//singlethreaded, event driven, non blocking I/O models

const fs = require('fs'); //require - built in function used to import modules

const http = require('http');
// const https = require('https');
const url = require('url');

//synchronous - Blocking ---------------------
// const textInput = fs.readFileSync('./txt/input.txt','utf-8');
// console.log('file',textInput);

// const textOut = `This is the new file with new lines - ${textInput}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',"textOut");


//asynchronous - Non Blocking ------------------
// fs.readFile('./txt/input.txt','utf-8',(err, data) =>{
//     console.log(data);
// })
// console.log('reading file ....');


//callback hell --------------- 
//hard to read and unmanageable code, calling functions one after anothe. To escape this callback hell can use promises or async await
// fs.readFile('./txt/input.txt','utf-8',(err, data1) =>{
//     fs.readFile(`${data1}.txt`,'utf-8',(err, data2)=>{
//         fs.readFile('./txt/output.txt','utf-8',(err,data3) =>{
//             fs.writeFile('./txt/final.txt',`${data1} ${data2} ${data3}`,'utf-8',(err) =>{
//                 if(err) throw err;
//                 console.log('file has been saved');
//             } )
//         })
//     })
// })


// const options = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// };

// const server = http.createServer(options,(req,res) =>{
//     console.log(req.url);
//     const pathName = req.url;
// Common headers used for all responses
// const commonHeaders = {
//     'Content-Type': 'text/html',                       // Default content type
//     'X-Powered-By': 'Node.js',                         // Shows what tech stack is used
//     'Strict-Transport-Security': 'max-age=31536000; includeSubDomains', // Enforces HTTPS
//     'X-Content-Type-Options': 'nosniff',               // Prevents MIME sniffing
//     'X-Frame-Options': 'DENY',                         // Prevents clickjacking
//     'X-XSS-Protection': '1; mode=block',               // Enables XSS filter in browser
//     'Content-Security-Policy': "default-src 'self'",   // Limits what external content can be loaded
//     'Referrer-Policy': 'no-referrer',                  // Controls how much referrer info is sent
//     'Cache-Control': 'no-store',                       // Prevents browser caching
//     'Access-Control-Allow-Origin': '*',                // CORS: allow requests from any origin
//     'My-Own-Header': 'hello-world',                    // Custom header
//     'Set-Cookie': 'userId=abc123; HttpOnly',           // Sends a cookie to the browser
//     'ETag': '123abc',                                  // Identifies version of the response
//     'Vary': 'User-Agent'                               // Response may vary based on user agent
// };

//     if(pathName === '/overview'){
//         res.end("This is the overview route")
//     }else if(pathName === '/product'){
//         res.writeHead(200, {
//             'Content-Disposition': 'inline'
//         });
//         res.end("This is the product ")
//     }else if(pathName === "/"){
//         res.writeHead(200, {
//             'Content-type':'application/json',
//             'X-powered-by':'Express JS',
//             'name':'Prem',
//             'Country':'India',
//             'Referrer-Policy': 'no-referrer',
//             'Cache-Control':'no-store',
//             'Access-Control-Allow-Origin':'www.mysite.com'
//         })
//         // res.end("Hello from the server");
//         res.end(JSON.stringify({message:"Hello from the Server",status:200, success:true,data:{
//             id:1,name:'prem'
//         }}));
//     }else if(pathName === '/strict'){
//         res.writeHead(200,{
//             'Content-Type': 'text/html',
//             'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
//         });
//         res.end("<h1>Strict Transport Security is enabled</h1>");
//     }else if(pathName ==='/iframe'){
//         res.writeHead(200,{
//             'Content-type':'text/html',
//             'X-Frame-Options': 'DENY',
//         });
//         res.end("<h1>Clickjacking protection is enabled</h1>");
//     }else{
//         res.writeHead(404, {
//             'Content-type':'text/html',
//             'my-own-header':'hello-world',
//             'X-powered-by': 'Node.js',
//             'X-Custom-Error': 'PageNotFound',
//             'name':'Prem'
//         });
//         res.end("<h1>Page not found</h1>");
//     }
// });
const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data); 

const template = fs.readFileSync(`${__dirname}/client/overview.html`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/client/card.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/client/product.html`, 'utf-8');

const replaceTemplate = (temp, product) =>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic){
        output = output.replace(/{%NOTORGANIC%}/g, 'not-organic');
    }
    return output;
}

const server = http.createServer((req, res) => {
    console.log(req.url);
    const { query,pathname } = url.parse(req.url,true);
    console.log(query);
    console.log(pathname);
    if (pathname === '/overview') {
        res.writeHead(200, {
            'content-type':'text/html',
        });
        const cardsHtml = dataObj.map(e =>replaceTemplate(card,e)).join('');
        const output = template.replace(/{%PRODUCTCARDS%}/g, cardsHtml);
        res.end(output);
    } else if(pathname === '/product'){
        res.writeHead(200, {
            'Content-type':'text/html',
        });
        const productObj = dataObj[query.id];
        const output = replaceTemplate(product, productObj);
        res.end(output);
    } else if (pathname === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json',
        })
        res.end(data);
    } else if(pathname === '/') {
        res.end("<h1>Welcome to the Node.js Server</h1>");
    }else{
        res.end("<h1>Page not found</h1>");
    }
})
server.listen(8000, 'localhost', () => {
    console.log('Server is running on port 8000');
})