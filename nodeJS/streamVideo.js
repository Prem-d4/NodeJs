const fs = require('fs');
const http = require('http');
const path = require('path');

const videoPath = path.join(__dirname, 'data', 'sample.mp4');

const server = http.createServer((req, res) => {
    // const stat = fs.statSync(videoPath);
    // const fileSize = stat.size;
    // const range = req.headers.range;
    // console.log(stat,range);

    // if(range){
    //     const parts = range.replace(/bytes=/, '').split('-');
    //     const start = parseInt(parts[0], 10);
    //     const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    //      const chunkSize = end - start + 1;
    //     const file = fs.createReadStream(videoPath, { start, end });

    //     res.writeHead(206, {
    //         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    //         'Accept-Ranges': 'bytes',
    //         'Content-Length': chunkSize,
    //         'Content-Type': 'video/mp4',
    //     });

    //     file.pipe(res);
    // } else {
    //     // No range header – send full file
    //     res.writeHead(200, {
    //         'Content-Length': fileSize,
    //         'Content-Type': 'video/mp4',
    //     });

    //     fs.createReadStream(videoPath).pipe(res);
    // }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    console.log('🟡 Incoming request:', req.url);
    console.log('📦 Range header:', range);

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        console.log(`➡️ Streaming from byte ${start} to ${end}`);

        const chunkSize = end - start + 1;
        const file = fs.createReadStream(videoPath, { start, end });

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        });

        file.pipe(res);

        file.on('close', () => {
            console.log('✅ Finished streaming this chunk.\n');
        });
    } else {
    console.log('❌ No Range header – rejecting full file send');
    res.writeHead(416, {
        'Content-Type': 'text/plain'
    });
    res.end('Range header required');
}
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});