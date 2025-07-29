const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject(`could not find the file - ${file}: ${err.message}`);
            resolve(data);
        });
    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file,data,'utf-8', (err) => {
            if (err) reject(`could not write to the file - ${file}: ${err.message}`);
            resolve('success');
        })
    });
}

// readFilePro(`${__dirname}/dog.txt`).then(data => {
//     console.log('File content:', data);
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             console.log('Random dog image:', res.body.message);
//             fs.writeFile('dog-img.txt', res.body.message, (err) => {
//                 if (err) console.error('Error writing to file:', err.message);
//                 console.log('Random dog image saved to dog-img.txt');
//             });
//         })
//         .catch(err => {
//             console.error('Error fetching dog image:', err.message);
//         });
// })

// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//     console.log('File content:', data);

    // superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    //     if (err) console.error('Error fetching dog image:', err.message);
    //     console.log(res.body.message);

    //     fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //         if (err) console.error('Error writing to file:', err.message);
    //         console.log('Random dog image saved to dog-img.txt');
    //     });
    // });

    // superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
    //     fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //         if (err) console.error('Error writing to file:', err.message);
    //         console.log('Random dog image saved to dog-img.txt',res.body.message);
    //     })
    // }).catch(err => {
    //         console.error('Error writing to file:', err.message);
    // });
// });

readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        console.log('File content:', data);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log('Random dog image:', res.body.message);
        return writeFilePro('dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log('Random dog image saved to dog-img.txt');
    })
    .catch(err => {
        console.error('Error:', err);
    });



