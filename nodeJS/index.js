//singlethreaded, event driven, non blocking I/O models

const fs = require('fs'); //require - built in function used to import modules

//synchronous - Blocking ---------------------
const textInput = fs.readFileSync('./txt/input.txt','utf-8');
console.log('file',textInput);

const textOut = `This is the new file with new lines - ${textInput}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',"textOut");


//asynchronous - Non Blocking ------------------
fs.readFile('./txt/input.txt','utf-8',(err, data) =>{
    console.log(data);
})
console.log('reading file ....');


//callback hell --------------- 
//hard to read and unmanageable code, calling functions one after anothe. To escape this callback hell can use promises or async await
fs.readFile('./txt/input.txt','utf-8',(err, data1) =>{
    fs.readFile(`${data1}.txt`,'utf-8',(err, data2)=>{
        fs.readFile('./txt/output.txt','utf-8',(err,data3) =>{
            fs.writeFile('./txt/final.txt',`${data1} ${data2} ${data3}`,'utf-8',(err) =>{
                if(err) throw err;
                console.log('file has been saved');
            } )
        })
    })
})

