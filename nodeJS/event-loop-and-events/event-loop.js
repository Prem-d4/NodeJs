const { Console } = require('console');
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4; // Limit the thread pool size to 1 for testing

setTimeout(() =>{
    console.log('timer 1 has finsihed');
},0);

setImmediate(() =>{
    console.log('immediate 1 has finished');
});

fs.readFile('./txt/input.txt',() =>{
    console.log('I/O HAS FINSIHED')
    console.log('-----------------------');

    setTimeout(() =>{
    console.log('timer 2 has finsihed');
},0);

setTimeout(() =>{
    console.log('timer 3 has finsihed');
},3000);

setImmediate(() =>{
    console.log('immediate 2 has finished');
});

process.nextTick(() =>{
    console.log('Process nexttick');
});

crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    console.log(Date.now() - start,'Password encrypted');

crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    console.log(Date.now() - start,'Password encrypted');

crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    console.log(Date.now() - start,'Password encrypted');

crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    console.log(Date.now() - start,'Password encrypted');


// crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(Date.now() - start,'Password encrypted');
// });
// crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(Date.now() - start,'Password encrypted');
// });
// crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(Date.now() - start,'Password encrypted');
// });
// crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(Date.now() - start,'Password encrypted');
// });

});



console.log('Hello from the top-level code');