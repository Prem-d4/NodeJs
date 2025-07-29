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
        fs.writeFile(file, data, 'utf-8', (err) => {
            if (err) reject(`could not write to the file - ${file}: ${err.message}`);
            resolve('success');
        })
    });
}

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log('File content:', data);

        const response1 = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const response2 = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const response3 = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

        const all = await Promise.all([response1, response2, response3]);
        const imgs = all.map(res => res.body.message);
        console.log('All images:', imgs);

        // console.log('Random dog image:', response.body.message);

        // await writeFilePro('dog-img.txt', response.body.message);
        await writeFilePro('dog-img.txt', imgs.join('\n'));
        console.log('Random dog image saved to dog-img.txt');
    } catch (err) {
        console.error('this is the error coming', err);
        // throw err; // Re-throw the error to be handled by the caller
    }

    // return 'Dog picture fetched and saved successfully';
}
// console.log('hello top level code 0');
getDogPic()
// getDogPic().then(x =>{
//     console.log(x);
//     console.log('hello top level code 2');
// }).catch(err => {
//     console.error('Error in getDogPic:', err);
// });
// const X = getDogPic();
// console.log(X); // This will log a Promise object, not the resolved value
// console.log('hello top level code 1');


// function name is  Immediately Invoked Function Expression (IIFE)
// (async()=>{
//     try{
//         console.log('hello top level code 0');
//         const result = await getDogPic();
//         console.log(result);
//         console.log('hello top level code 2');
//     }catch(err){
//         console.error('Error in IIFE:', err);
//     }

// })();