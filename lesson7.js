// Readable    --64kb
// Writable    --64kb    
// Duplex - 1 и 2 вместе
// Transform - как дуплекс но заодно может изменить данные по мере чтения



const fs = require('fs')
const path = require('path');
const { Stream } = require('stream');

// fs.readFile(path.resolve(__dirname,'test.txt'), (err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), /*{encoding:'utf-8'}*/)

// stream.on('data', (chunk) =>{
//     console.log(chunk)
// })

// stream.on('error', (e) => console.log(e))  // из-за ошибки может упасть весь node js проект

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

// for(let i = 0; i< 20; i++) {
//     writableStream.write(i+ '\n');
// }

// writableStream.end()
// writableStream.close()

http.createServer((req, res) => {
    //req = readable Stream
    //res = writable Stream 

    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
    // stream.on('data', chunk => res.write(chunk))
    // stream.on('end', chunk => res.end)
    stream.pipe(res)  //связывает стримы
})