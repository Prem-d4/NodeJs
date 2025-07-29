const fs = require('fs');
const server = require('http').createServer();
const { Duplex, Transform } = require('stream');

// server.on('request', (req, res) => {
//     //solution 1
//     // fs.readFile(`${__dirname}/txt/large.txt`, 'utf-8', (err, data) => {
//     //     if(err) console.error('Error reading file:',err);
//     //     console.log(data);
//     //     res.end(data);
//     // });

//     //solution 2
//     // const readable = fs.createReadStream(`${__dirname}/txt/large.txt`, 'utf-8');
//     // readable.on('data', (chunk) => {
//     //     console.log('New chunk received:');
//     //     console.log(chunk);
//     //     res.write(chunk);
//     // });

//     // readable.on('end', () => {
//     //     console.log('End of file reached');
//     //     res.end();
//     // });

//     // readable.on('error', (err) => {
//     //     console.error('Error reading stream:', err);
//     //     res.statusCode = 500;
//     //     res.end('File not found');
//     // });

//     //solution 3
//     const readable = fs.createReadStream(`${__dirname}/txt/large.txt`, 'utf-8');
//     readable.pipe(res);

// });

server.on('request', (req, res) => {

    // readable stream example
    // const readable = fs.createReadStream(`${__dirname}/txt/input.txt`, 'utf-8');
    // readable.on('data', (chunk) => {
    //     console.log('📥 Received chunk:', chunk);
    // });

    // readable.on('end', () => {
    //     console.log('✅ Finished reading.');
    // });


    // writable stream example
    // const writable = fs.createWriteStream(`${__dirname}/txt/output.txt`, 'utf-8');
    // writable.write('Hello, ');
    // writable.write('world!\n');
    // writable.end('✅ Done writing.');

    // writable.on('finish', () => {
    //     console.log('📤 Writing finished.');
    // });

    //duplex stream example
    const myDuplex = new Duplex({
        read(size) {
            this.push('Hello from the readable side!\n');
            this.push(null); // No more data
        },
        write(chunk, encoding, callback) {
            console.log(`Received from writable side: ${chunk.toString()}`);
            callback(); // Signal that writing is done
        }
    })

    myDuplex.write('Hello from the writable side!\n', 'utf-8');
    myDuplex.on('data', (chunk) => {
        console.log(`Data from duplex stream: ${chunk.toString()}`);
    });

    // Transform stream example
    const upperCaseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const upper = chunk.toString().toUpperCase();
            callback(null, upper);
        }
    });

    // Pipe readable -> transform -> writable
    process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
});



server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});